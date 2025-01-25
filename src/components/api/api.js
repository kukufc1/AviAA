export const getSearchId = async () => {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search'); // Измененный URL
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`); // Обработка ошибок
    }
    const data = await response.json();
    return data.searchId; // Возвращаем searchId
  } catch (error) {
    console.error('Ошибка при получении searchId:', error);
    throw error; // Пробрасываем ошибку дальше для обработки
  }
};

export const getSearchPortion = async (searchId) => {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`); // Измененный URL
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`); // Обработка ошибок
    }
    const data = await response.json();
    return data; // Возвращаем данные билетов
  } catch (error) {
    console.error('Ошибка при получении порции данных:', error);
    throw error; // Пробрасываем ошибку дальше для обработки
  }
};

// Дополнительная функция для проверки завершения поиска
export const isSearchComplete = (data) => {
  return data.stop === true; // Проверяем, завершен ли поиск
};
