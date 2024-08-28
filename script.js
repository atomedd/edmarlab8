let contacts = [
    { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
    { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
    { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" }
];

// Function to add a new contact
const addContact = () => {
    do {
        const name = prompt("Enter contact name:");
        const phone = prompt("Enter contact phone:");
        const email = prompt("Enter contact email:");
        if (name && phone && email) {
            contacts.push({ name, phone, email });
            alert("Contact added successfully!");
        }
    } while (confirm("Do you want to add another contact?"));
    updateContactList();
};

// Function to find a contact by name
const findContact = () => {
    const name = prompt("Enter the name of the contact you are looking for:");
    const contact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (contact) {
        alert(`Found contact:\nName: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
    } else {
        alert("Contact not found.");
    }
};

// Recursive function to search for a contact by name
const searchContactRecursive = (name, index = 0) => {
    if (index >= contacts.length) return null;
    return contacts[index].name.toLowerCase() === name.toLowerCase() ? contacts[index] : searchContactRecursive(name, index + 1);
};

// Function to update the contact list display
const updateContactList = () => {
    setTimeout(() => {
        const contactListDiv = document.getElementById("contactList");
        contactListDiv.innerHTML = contacts.map(contact => `<p>${contact.name} - ${contact.phone} - ${contact.email}</p>`).join('');
    }, 1000);
};

// Log the count of contacts every 5 seconds
setInterval(() => {
    console.log(`Number of contacts: ${contacts.length}`);
}, 5000);

// Change background color every 5 seconds
setInterval(() => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}, 5000);
