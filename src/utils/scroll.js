export const scrollToForm = () => {
  document.getElementById('consultation-form')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}; 