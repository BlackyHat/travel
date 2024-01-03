// function useLocalStorage<T>(key: string, initialValue: T) {
//   const [value, setValue] = React.useState<T | undefined>(() => {
//     const localStorageValue = localStorage.getItem(key);

//     const update = React.useCallback(
//       (newValue: T) => {
//         setValue(newValue);

//         if (typeof newValue === "undefined") {
//           localStorage.removeItem(key);
//         } else {
//           localStorage.setItem(key, JSON.stringify(newValue));
//         }
//       },
//       [key],
//     );
//     const set = React.useCallback(
//       (newValue: T) => {
//         try {
//           setValue(newValue);
//           localStorage.setItem(key, JSON.stringify(newValue));
//         } catch (error) {}
//       },
//       [key],
//     );

//     const remove = React.useCallback(() => {
//       try {
//         setValue(undefined);
//         localStorage.removeItem(key);
//       } catch (error) {}
//     }, [key]);

//     return localStorageValue !== null
//       ? parseJSON(localStorageValue)
//       : initialValue;
//   });
//   //…

//   return [value, update, remove] as const;
// }
// function parseJSON(value: string) {
//   return value === "undefined" ? undefined : JSON.parse(value);
// }
