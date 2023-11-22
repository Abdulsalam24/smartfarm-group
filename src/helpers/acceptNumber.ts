const acceptNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const { key, ctrlKey } = event;
  const validKeys = /^[0-9.]+$/; // Regular expression for valid characters

  // Allow arrow keys, Enter, and Backspace regardless of ctrlKey
  const allowedKeys = ["ArrowRight", "ArrowLeft", "Enter", "Backspace"];

  if (!ctrlKey && !allowedKeys.includes(key) && !validKeys.test(key)) {
    event.preventDefault();
  }
};

export default acceptNumber;
