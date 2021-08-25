const useConvertTime = (unix) => {
  let unix_timestamp = unix;
  let date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
  let minutes = '0' + date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var formattedTime = hours + ':' + minutes.substr(-2) + ' ' + ampm;

  return formattedTime;
};

export default useConvertTime;
