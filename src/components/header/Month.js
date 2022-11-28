const Month = ({ month }) => {
  let changedMonth = '';

  if (month === 'Tishri') {
    changedMonth = 'Тишрей';
  }
  if (month === 'Heshvan') {
    changedMonth = 'Хешван';
  }
  if (month === 'Kislev') {
    changedMonth = 'Кислев';
  }
  if (month === 'Tevet') {
    changedMonth = 'Тевет';
  }
  if (month === 'Shevat') {
    changedMonth = 'Шват';
  } 
  if (month === 'AdarI') {
    changedMonth = 'Адар';
  }
  if (month === 'AdarII') {
    changedMonth = 'Адар бет';
  }
  if (month === 'Nisan') {
    changedMonth = 'Нисан';
  }
  if (month === 'Iyyar') {
    changedMonth = 'Ияр';
  }
  if (month === 'Sivan') {
    changedMonth = 'Сиван';
  }
  if (month === 'Tammuz') {
    changedMonth = 'Тамуз';
  }
  if (month === 'Av') {
    changedMonth = 'Ав';
  }
  if (month === 'Elul') {
    changedMonth = 'Элул';
  }
  
  return changedMonth;
};

export default Month;
