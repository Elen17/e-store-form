document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('requestForm');
  const confirmationDiv = document.getElementById('confirmation');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
		// validation failed
      form.reportValidity();
      return;
    }

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      product: form.product.value,
      quantity: form.quantity.value,
      comments: form.comments.value.trim()
    };

    confirmationDiv.textContent = `Thank you for your request, ${formData.name}! Your order for ${formData.quantity} ${formData.product}(s) has been submitted.`;

    form.reset();
  });
});