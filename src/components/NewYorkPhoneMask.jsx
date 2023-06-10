import React, { useState } from 'react';

const NewYorkPhoneMask = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (event) => {
    const inputPhoneNumber = event.target.value;
    const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);
    setPhoneNumber(formattedPhoneNumber);
  };

  const formatPhoneNumber = (inputPhoneNumber) => {
    // Удаляем все символы, кроме цифр
    const cleaned = inputPhoneNumber.replace(/\D/g, '');

    // Применяем маску для новой йоркского телефонного номера: (123) 456-7890
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    let formattedPhoneNumber = '';
    if (match) {
      formattedPhoneNumber = `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return formattedPhoneNumber;
  };

  return (
      <input
        type="text"
        className='form-control'
        id="phone"
        placeholder='Your phone number'
        value={phoneNumber}
        onChange={handleChange}
      />
  );
};

export default NewYorkPhoneMask;