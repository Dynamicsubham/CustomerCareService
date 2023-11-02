
import React, { useState } from "react";
import emailjs from 'emailjs-com';


const Form = () => {
    const [isContactPopupOpen, setContactPopupOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [warranty, setWarranty] = useState("");
    const [product, setProduct] = useState("");
    const [type, setType] = useState("");
    const [issue, setIssue] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [address, setAddress] = useState("");
    // eslint-disable-next-line
    const [contactTime, setContactTime] = useState("");
    const [additionalNotes , setAdditionalNotes] = useState("");
    // eslint-disable-next-line
    const toggleContactPopup = () => {
      setContactPopupOpen(!isContactPopupOpen);
    };
  
    const handleNext = () => {
      if (currentStep === 1 && !warranty) {
        alert("Please select warranty status.");
        return;
      } else if (currentStep === 2 && (!product || !type || !issue)) {
        alert("Please fill in all the appliance details.");
        return;
      } else if (currentStep === 3 && (!name || !phone || !email || !city || !pincode || !address)) {
        alert("Please fill in all the contact information.");
        return;
      } else if (currentStep === 4 && (!contactTime)) {
        alert("Please select a preferred time to contact.");
        return;
      }
  
      setCurrentStep(currentStep + 1);
    };
  
    const handlePrevious = () => {
      setCurrentStep(currentStep - 1);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      // You can access all form field values in the state variables
    
      // Send email using EmailJS API
      emailjs.send(
        'service_jyorxv8', // Replace with your EmailJS service ID
        'template_d9gedf2', // Replace with your EmailJS template ID
        {
          warranty,
          product,
          type,
          issue,
          name,
          phone,
          email,
          city,
          pincode,
          address,
          contactTime,
          additionalNotes,
        },
        'P8I1YToMpBv5AKWOP' // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Your appointment is booked with us. We will reach you in an hour.');
        // Reset form after successful submission
        setCurrentStep(1);
        setWarranty("");
        setProduct("");
        setType("");
        setIssue("");
        setName("");
        setPhone("");
        setEmail("");
        setCity("");
        setPincode("");
        setAddress("");
        setContactTime("");
        setAdditionalNotes("");
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Handle error if the email sending fails
      });
    };

    return (
        <div>
          <div className="content">
            {currentStep === 1 && (
              <section className="section">
                <h2>Step 1/4: Select warranty details</h2>
                <label htmlFor="warranty">Is your appliance under warranty?</label>
                <select id="warranty" value={warranty} onChange={(e) => setWarranty(e.target.value)} required>
                  <option value="">Select warranty status</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="AMC">AMC</option>
                </select>
                <button type="button" onClick={handleNext}>Next</button>
              </section>
            )}
            {currentStep === 2 && (
              <section className="section">
                <h2>Step 2/4: Appliances details</h2>
                <label htmlFor="product">Select product</label>
                <select id="product" value={product} onChange={(e) => setProduct(e.target.value)} required>
                  <option value="">Select product</option>
                  <option value="Refrigerator">Refrigerator</option>
                  <option value="Television">Television</option>
                  <option value="Microwave Oven">Microwave Oven</option>
                  <option value="Washing Machine">Washing Machine</option>
                  <option value="Air Conditioner">Air Conditioner</option>
                </select>
                <label htmlFor="type">Select type</label>
                <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="">Select type</option>
                  {/* Add type options based on the selected product */}
                  {product === "Refrigerator" && (
                    <>
                      <option value="Single Door">Single Door</option>
                      <option value="Double Door">Double Door</option>
                      <option value="Side by Side Door">Side by Side Door</option>
                      <option value="Bottom Freezer">Bottom Freezer</option>
                    </>
                  )}
                  {product === "Television" && (
                    <>
                      <option value="LED">LED</option>
                      <option value="LCD">LCD</option>
                      <option value="Plasma">Plasma</option>
                      <option value="Curve">Curve</option>
                      <option value="Smart">Smart</option>
                      <option value="3D">3D</option>
                    </>
                  )}
                  {product === "Washing Machine" && (
                    <>
                      <option value="Semi Automatic">Semi Automatic</option>
                      <option value="Fully Automatic">Fully Automatic</option>
                      <option value="Front Load">Front Load</option>
                      <option value="Twin Load">Twin Load</option>
                      <option value="Washer Dryer">Washer Dryer</option>
                    </>
                  )}
                  {product === "Air Conditioner" && (
                    <>
                      <option value="Split AC">Split AC</option>
                      <option value="Window AC">Window AC</option>
                      <option value="Residential AC">Residential AC</option>
                    </>
                  )}
                  {product === "Microwave Oven" && (
                    <>
                    <option value="Convention">Convention</option>
                    <option value="Grill">Grill</option>
                    <option value="Solo">Solo</option>
                    </>
                  )}
                  {/* Add type options for other products */}
                </select>
                <label htmlFor="issue">Select issue</label>
                <select id="issue" value={issue} onChange={(e) => setIssue(e.target.value)} required>
                  <option value="">Select issue</option>
                  {/* Add common issue options based on the selected product */}
                  {product === "Refrigerator" && (
                    <>
                    <option value="Refrigerator Not Run">Refrigerator Not Run</option>
                    <option value="Refrigerator Not Cooling">Refrigerator Not Cooling</option>
                    <option value="Refrigerator Runs Constantly">Refrigerator Runs Constantly</option>
                    <option value="Refrigerator Over Cooling">Refrigerator Over Cooling</option>
                    <option value="Refrigerator Light Not Working">Refrigerator Light Not Working</option>
                    <option value="Refrigerator Not Defrosting">Refrigerator Not Defrosting</option>
                    <option value="Refrigerator Is Noisy Or Loud">Refrigerator Is Noisy Or Loud</option>
                    <option value="Refrigerator Defrost Drain Clogged">Refrigerator Defrost Drain Clogged</option>
                    <option value="Refrigerator Leaking Water">Refrigerator Leaking Water</option>
                    <option value="General Serviceing">General Serviceing</option>
                    <option value="Installation/Un-Installation">Installation/Un-Installation</option>
                    <option value="Others">Others</option>
                    </>
                  )}
                  {product === "Television" && (
                    <>
                      <option value="No Power">No Power</option>
                      <option value="No Picture">No Picture</option>
                      <option value="No Sound">No Sound</option>
                      <option value="General Serviceing">General Serviceing</option>
                      <option value="Installation/Un-Installation">Installation/Un-Installation</option>
                      <option value="Others">Others</option>
                    </>
                  )}
                  {product === "Air Conditioner" && (
                    <>
                    <option value="Air Conditioner Not Run">Air Conditioner Not Run</option>
                    <option value="Air Conditioner Not Cooling">Air Conditioner Not Cooling</option>
                    <option value="Air Conditioner Low Cooling">Air Conditioner Low Cooling</option>
                    <option value="Air Conditioner Over Cooling">Air Conditioner Over Cooling</option>
                    <option value="Air Conditioner Water Inside">Air Conditioner Water Inside</option>
                    <option value="Air Conditioner Won't Turn Off">Air Conditioner Won't Turn Off</option>
                    <option value="Air Conditioner Fan Not Working">Air Conditioner Fan Not Working</option>
                    <option value="Air Conditioner Compressor Won't Run">Air Conditioner Compressor Won't Run</option>
                    <option value="Air Conditioner Is Ioud Or Noisy">Air Conditioner Is Ioud Or Noisy</option>
                    <option value="Air Conditioner Leaking Water">Air Conditioner Leaking Water</option>
                    <option value="Air Conditioner Remote Control Not Working">Air Conditioner Remote Control Not Working</option>
                    <option value="Air Conditioner Coils Freezing">Air Conditioner Coils Freezing</option>
                    <option value="General Serviceing">General Serviceing</option>
                    <option value="Installation/Un-Installation">Installation/Un-Installation</option>
                    <option value="Others">Others</option>
                    </>
                  )}
                  {product === "Washing Machine" && (
                    <>
                    <option value="Washing Machine Won't Start">Washing Machine Won't Start</option>
                    <option value="Washing Machine Stops Mid Cycle">Washing Machine Stops Mid Cycle</option>
                    <option value="Washing Machine Overflowing">Washing Machine Overflowing</option>
                    <option value="Washing Machine Door Or Lid Won't Lock">Washing Machine Door Or Lid Won't Lock</option>
                    <option value="Washing Machine Won't Spin Or Agitate">Washing Machine Won't Spin Or Agitate</option>
                    <option value="Washing Machine Won't Spin">Washing Machine Won't Spin</option>
                    <option value="Washing Machine Is Making Loud Noise">Washing Machine Is Making Loud Noise</option>
                    <option value="Washing Machine Won't Drain">Washing Machine Won't Drain</option>
                    <option value="Washing Machine Fills Slowly Or Will Not Fill At All">Washing Machine Fills Slowly Or Will Not Fill At All</option>
                    <option value="Washing Machine Leaking Water">Washing Machine Leaking Water</option>
                    <option value="Washing Machine Vibrating Or Shaking">Washing Machine Vibrating Or Shaking</option>
                    <option value="General Serviceing">General Serviceing</option>
                    <option value="Installation/Un-Installation">Installation/Un-Installation</option>
                    <option value="Others">Others</option>
                    </>
                  )}
                  {product === "Microwave Oven" && (
                    <>
                    <option value="Microwave Not Heating">Microwave Not Heating</option>
                    <option value="Microwave Not Working">Microwave Not Working</option>
                    <option value="Microwave Light Bulb Not Working">Microwave Light Bulb Not Working</option>
                    <option value="Microwave Shuts Off After a Few Seconds">Microwave Shuts Off After a Few Seconds</option>
                    <option value="Microwave Turntable Not Turning">Microwave Turntable Not Turning</option>
                    <option value="Microwave Buttons Not Working">Microwave Buttons Not Working</option>
                    <option value="Microwave Display Not Working">Microwave Display Not Working</option>
                    <option value="Microwave Is Sparking Or Arcing">Microwave Is Sparking Or Arcing</option>
                    <option value="Microwave Door Won't Open">Microwave Door Won't Open</option>
                    <option value="Microwave Exhaust Fan Not Working">Microwave Exhaust Fan Not Working</option>
                    <option value="Microwave Is Loud Or Noisy">Microwave Is Loud Or Noisy</option>
                    <option value="General Serviceing">General Serviceing</option>
                    <option value="Installation/Un-Installation">Installation/Un-Installation</option>
                    <option value="Others">Others</option>
                    </>
                  )}
                  {/* Add common issue options for other products */}
                </select>
                <button type="button" onClick={handlePrevious}>Previous</button>
                <button type="button" onClick={handleNext}>Next</button>
              </section>
            )}
            {currentStep === 3 && (
              <section className="section">
                <h2>Step 3/4: Contact Information</h2>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                  <label htmlFor="pincode">Pincode</label>
                  <input type="text" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                  <label htmlFor="address">Address</label>
                  <textarea id="address" rows="4" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
                  <button type="button" onClick={handlePrevious}>Previous</button>
                  <button type="button" onClick={handleNext}>Next</button>
                </form>
              </section>
            )}
            {currentStep === 4 && (
                <section className="section">
                    <h2>Step 4/4: Time to Contact</h2>
                    <label htmlFor="contactTime">Select a preferred time to contact you:</label>
                    <select value={contactTime} onChange={(e) => setContactTime(e.target.value)} required>
                        <option value="">Select Time To Contact</option>
                        <option value="8-9">8:00 AM - 9:00 AM</option>
                        <option value="9-10">9:00 AM - 10:00 AM</option>
                        <option value="10-11">10:00 AM - 11:00 AM</option>
                        <option value="11-12">11:00 AM - 12:00 PM</option>
                        <option value="12-1">12:00 PM - 1:00 PM</option>
                        <option value="1-2">1:00 PM - 2:00 PM</option>
                        <option value="2-3">2:00 PM - 3:00 PM</option>
                        <option value="3-4">3:00 PM - 4:00 PM</option>
                        <option value="4-5">4:00 PM - 5:00 PM</option>
                        {/* Add more time options as needed */}
                    </select>
                        <p className="label">Additional notes or comments:</p>
                        <textarea rows="4" value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)}></textarea>
                        <button type="button" onClick={handlePrevious}>Previous</button>
                        <button type="submit" onClick={handleSubmit} onSubmit={handleSubmit}>Submit</button>
                </section>
            )}
          </div>
        </div>
      );

}

export default Form;
