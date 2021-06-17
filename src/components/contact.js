export const Contact = () => {
  const contact = document.createElement("main");
  contact.classList.add("contact");

  const contactImg = document.createElement("img");
  contactImg.classList.add("contact-img");
  contact.appendChild(contactImg);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "La Boulangère";
  contactTitle.classList.add("contact-title");
  contactInfo.appendChild(contactTitle);

  const address = document.createElement("p");
  address.textContent = "South Melbourne 5532 Australia";
  contactInfo.appendChild(address);

  const phone = document.createElement("p");
  phone.textContent = "Phone: +61 5 5555 1234";
  contactInfo.appendChild(phone);

  const email = document.createElement("p");
  email.textContent = "Email: laboulangere@top.com";
  contactInfo.appendChild(email);

  contact.appendChild(contactInfo);

  return contact;
};
