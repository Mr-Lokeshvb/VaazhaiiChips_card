const details = {
    phone: "+919942467795",
    whatsapp: "919488844216",
    website: "https://vaazhaii.com",
    instagram: "https://www.instagram.com/vaazhaii_foods?igsh=cTUwaHVsc2xxa3R0",
    maps: "https://maps.google.com",
    email: "info@vaazhaii.com"
};

// Call
function callNow() {
    window.location.href = `tel:${details.phone}`;
}

// WhatsApp
function whatsapp() {
    window.open(`https://wa.me/${details.whatsapp}`, "_blank");
}

// Website
function website() {
    window.open(details.website, "_blank");
}

// Instagram
function instagram() {
    window.open(details.instagram, "_blank");
}

// Maps
function maps() {
    window.open(details.maps, "_blank");
}

// Email
function email() {
    window.location.href = `mailto:${details.email}`;
}

// Share
async function shareCard() {

    if (navigator.share) {

        try {

            await navigator.share({
                title: "Vaazhaii",
                text: "Premium Kerala Banana Chips",
                url: details.website
            });

        } catch (e) {}

    } else {

        navigator.clipboard.writeText(details.website);

        alert("Website copied to clipboard!");

    }

}