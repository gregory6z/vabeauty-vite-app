import {
  CalendarCheck,
  CalendarPlus,
  Check,
  Pencil,
  SignOut,
} from "phosphor-react";
import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ServicesContext } from "../../context/ServicesContext";
import { Calendar } from "./Calendar";
import AOS from "aos";

import {
  CheckoutContainer,
  CalendarContainer,
  SchedulesContainer,
  ConfirmationButton,
  SchedulerButtons,
  RadioButton,
} from "./styles";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { api } from "../../services/api";
import { format } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { SuccessAppointment } from "./SuccessAppointment";
import { CheckoutCard } from "./CheckoutCard";

interface AvailabilityItem {
  hour: number;
  available: boolean;
}

interface AppointmentFormData {
  appointmentHour: number;
}

const schema = yup
  .object({
    appointmentHour: yup.string().required(),
  })
  .required();

export function Appointment() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    const [availability, setAvailability] = useState<AvailabilityItem[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [appointment, setAppointment] = useState<null | boolean>(null);
  const [date, setDate] = useState<Date>();
  const { isAuthenticated } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: yupResolver(schema),
  });

  const { cartItem } = useContext(ServicesContext);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  function SetSelectedDate(day: Date) {
    setSelectedDate(day);
  }

  async function handleCreateAppointment(data: AppointmentFormData) {
    if (!isAuthenticated) {
      navigate("/login");
    }

    const { appointmentHour } = data;

    const date = new Date(selectedDate);
    date.setHours(appointmentHour);
    date.setMinutes(0);

    setDate(date);

    const service_id = cartItem?.id;
    const user_id = user?.id;

    await api.post("appointment", {
      date,
      service_id,
      user_id,
    });

    setAppointment(true);
  }

  useEffect(() => {
    api
      .get("appointment/day", {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
        },
      })
      .then((response) => {
        setAvailability(response.data);
      });
  }, [selectedDate]);

  const morningAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => hour < 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), "HH:00"),
        };
      });
  }, [availability]);

  const afternoonAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => hour >= 14)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), "HH:00"),
        };
      });
  }, [availability]);

  return (
    <CheckoutContainer>
      <div className="middleText">
        <button onClick={handleSignOut}>
          <SignOut size={16} />
          Sortir
        </button>

        <h1>Bienvenue {user?.name}</h1>
        <button>
          Editer profile <Pencil size={16} />
        </button>
      </div>
      <main data-aos="fade-left">
        {appointment ? (
          <SuccessAppointment date={date} />
        ) : (
          <>
            <CalendarContainer>
              <div className="rende-vous">
                <h3>RENDEZ-VOUS</h3>
                <p>Selectioner la date:</p>
              </div>
              <div className="calendar">
                <Calendar
                  selectedDate={selectedDate}
                  SetSelectedDate={SetSelectedDate}
                />
              </div>
            </CalendarContainer>
            <SchedulesContainer>
              <CheckoutCard />

              <span>
                Sélectionnez la date sur le calendrier et l'heure souhaitée à
                l'aide des boutons ci-dessous.
              </span>
              <p>Horaires disponibles:</p>

              <form onSubmit={handleSubmit(handleCreateAppointment)}>
                <div className="apres-midi">
                  <h3>MATIN</h3>

                  <Controller
                    control={control}
                    name="appointmentHour"
                    render={({ field }) => {
                      return (
                        <RadioGroup.Root
                          onValueChange={field.onChange}
                          value={String(field.value)}
                        >
                          <SchedulerButtons>
                            {morningAvailability.map(
                              ({ hourFormatted, available, hour }, index) => {
                                return (
                                  <RadioButton
                                    key={index}
                                    disabled={!available}
                                    value={String(hour)}
                                  >
                                    {hourFormatted}
                                  </RadioButton>
                                );
                              }
                            )}
                          </SchedulerButtons>

                          <h3 className="apres-midi">APRES MIDI</h3>
                          <SchedulerButtons>
                            {afternoonAvailability.map(
                              ({ hourFormatted, available, hour }) => {
                                return (
                                  <RadioButton
                                    disabled={!available}
                                    key={hourFormatted}
                                    value={String(hour)}
                                  >
                                    {hourFormatted}
                                  </RadioButton>
                                );
                              }
                            )}
                          </SchedulerButtons>
                        </RadioGroup.Root>
                      );
                    }}
                  />
                </div>

                <ConfirmationButton disabled={isSubmitting} type="submit">
                  <CalendarCheck size={26} /> CONFIRMER VOTRE RENDEZ-VOUS
                </ConfirmationButton>
              </form>
            </SchedulesContainer>
          </>
        )}
      </main>
    </CheckoutContainer>
  );
}
