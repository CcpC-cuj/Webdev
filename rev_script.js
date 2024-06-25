document.addEventListener("DOMContentLoaded", function() {
    const reservationTypeSelect = document.getElementById("reservationType");
    const privateEventFields = document.getElementById("privateEventFields");

    reservationTypeSelect.addEventListener("change", function() {
        if (reservationTypeSelect.value === "privateEvent") {
            privateEventFields.style.display = "block";
        } else {
            privateEventFields.style.display = "none";
        }
    });
});

function handleReservation(formData) {
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const date = new Date(formData.get("date"));
    const time = formData.get("time");
    const reservationType = formData.get("reservationType");
    const guests = formData.get("guests");
    const address = formData.get("address");
    const budget = formData.get("budget");
    const menuPreferences = formData.get("menuPreferences");
    const notes = formData.get("notes");

    // Validate selected date
    const currentDate = new Date();
    if (date < currentDate) {
        alert("Please select a date that is today or in the future.");
        return;
    }

    let smsMessage = "";

    if (reservationType === "dineIn") {
        // Validate booking time for dine-in
        const dayOfWeek = date.getDay();
        const bookingTime = new Date(date);
        bookingTime.setHours(Number(time.split(":")[0]), Number(time.split(":")[1]));

        // Check if it's a weekend or weekday and validate time
        let isBookingTimeValid = false;
        if (dayOfWeek === 0 || dayOfWeek === 6) { // Saturday or Sunday
            isBookingTimeValid = bookingTime.getHours() >= 16 && bookingTime.getHours() <= 19;
        } else { // Monday to Friday
            isBookingTimeValid = bookingTime.getHours() >= 8 && bookingTime.getHours() <= 19;
        }

        if (!isBookingTimeValid) {
            alert("Dine-in reservations are only available Monday - Friday: 8:00am - 7:00pm and Saturday - Sunday: 4:00pm - 7:00pm.");
            return;
        }

        // Make address required for dine-in
        document.getElementById("address").setAttribute("required", "true");

        // Prepare SMS message for dine-in
        smsMessage = `
            Dine In Reservation Details:
            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Date: ${date.toDateString()}
            Time: ${time}
            Menu Preferences: ${menuPreferences}
            Notes: ${notes}
        `;
    } else if (reservationType === "privateEvent") {
        // Remove the required attribute from address for private event
        document.getElementById("address").removeAttribute("required");

        // Prepare SMS message for private event
        smsMessage = `
            Private Event Reservation Details:
            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Date: ${date.toDateString()}
            Time: ${time}
            Number of Guests: ${guests}
            Address: ${address}
            Budget: ${budget}
            Menu Preferences: ${menuPreferences}
            Notes: ${notes}
        `;
    }

    // Encode the message for the SMS URL
    const encodedMessage = encodeURIComponent(smsMessage);

    // Compose SMS URL
    const smsUrl = `sms:8934076522?body=${encodedMessage}`;

    // Open SMS application with the composed URL
    window.location.href = smsUrl;
}

document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(document.getElementById("reservationForm"));

    // Handle the reservation
    handleReservation(formData);
});
