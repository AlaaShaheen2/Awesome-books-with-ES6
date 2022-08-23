/* eslint-disable no-undef */
class Time {
  ShowTime =() => {
    const daytime = luxon.DateTime.now()
      .setLocale(navigator.language)
      .toLocaleString({
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: 'false',
      });
    document.querySelector('.Tdate').innerHTML = daytime;
  };
}
export default Time;