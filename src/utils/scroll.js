export const scrollToForm = () => {
  document.getElementById('book-consultation')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}; 