document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('custom-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // You can perform any additional form validation here if needed

        // Display a custom popup using SweetAlert with a timer
        Swal.fire({
            title: 'Verified!',
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'OK',
            timer: 10000, // Set the timer to 10 seconds (in milliseconds)
            timerProgressBar: true,
            willClose: () => {
                // Timer will close the popup, you can add additional actions here if needed
                form.submit(); // Proceed with the form submission
            }
        });
    });
});