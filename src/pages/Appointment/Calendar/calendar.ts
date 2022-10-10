export const css = `


.DayPicker-wrapper {
  padding-bottom: 0;
  background: #2e6e7e;
  border-radius: 6px;
  padding:0;
  border:  0.5px solid rgb(218, 218, 218);

}
.DayPicker,
.DayPicker-Month {
  width: 100%;
}

.DayPicker-NavButton--prev {
  right: auto;
  left: 1rem;
  margin-right: 0;
  color: white;
}
.DayPicker-Month {
  border-collapse: separate;
  border-spacing: 8px;
  margin: 1rem 0 0 0;
  padding: 0.5rem;
  background-color: #FFF;
  border-radius: 0 0 6px 6px;
}
.DayPicker-Caption {
  margin-bottom: 1rem;
  padding: 0 1rem;
  color: #fff;
  text-align: center;
  > div {
    text-align: center;
  }
}
.DayPicker-Day {
  width: 20px;
  height: 20px;
}
.DayPicker-Day--available:not(.DayPicker-Day--outside) {
  background: #eaf0f2;
  border-radius: 6px;
  color: #000;
}
.DayPicker:not(.DayPicker--interactionDisabled)
  .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
  background: #red};
}
.DayPicker-Day--today {
  font-weight: normal;
}
.DayPicker-Day--disabled {
  color: #000 !important;
  background: transparent !important;
}
.DayPicker-Day--selected {
  background: #E3A6B7 !important;
  border-radius: 10px;
  color: #fff !important;
  font-weight: bold
}
`;
