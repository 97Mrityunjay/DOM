window.onload = ()=>{
    const heading1 = document.createElement("h1");
    heading1.innerText = "GeeksForGeeks Survey Form";
    heading1.className = "heading";
    document.body.appendChild(heading1);
    const formContainer = document.createElement("div");
    formContainer.id = "form-container";
    const form = document.createElement("form");
    form.method="get";
    const label1 = document.createElement("label");
    label1.appendChild(document.createTextNode(`Enter name `));
    label1.setAttribute("for","fullName");
    label1.style.display="block";
    form.appendChild(label1);
    const fullName = document.createElement("input");
    fullName.setAttribute("type", "text");
    fullName.name="fName";
    fullName.style.display="block";
    fullName.placeholder="full name"
    form.appendChild(fullName);
    const label2 = document.createElement("label");
    label2.appendChild(document.createTextNode("Enter email "));
    label2.style.display="block";
    form.appendChild(label2);
    const email = document.createElement("input");
    email.setAttribute("type","email");
    email.name = "emailId";
    email.placeholder="email id";
    email.style.display="block";
    form.appendChild(email);
    const label3 = document.createElement("label");
    label3.appendChild(document.createTextNode("Age"));
    label3.style.display="block";
    form.appendChild(label3);
    const age = document.createElement("input");
    age.type = "number";
    age.placeholder = "Enter your age";
    age.style.display="block";
    form.appendChild(age);
  
    const label4 = document.createElement("label");
    label4.appendChild(document.createTextNode("Which option best describes you?"));
    label4.style.display="block";
    form.appendChild(label4);
    const role = document.createElement("select");
    role.name = "role";
    role.style.display="block";
    const option1 = document.createElement("option");
    option1.value = "student";
    option1.innerText = "Student";
    role.appendChild(option1);
    const option2 = document.createElement("option");
    option2.value = "intern";
    option2.innerText = "Intern";
    role.appendChild(option2);
    const option3 = document.createElement("option");
    option3.value = "professional";
    option3.innerText = "Professional";
    role.appendChild(option3);
    form.appendChild(role);
    const label6 = document.createElement("label");
    label6.innerText = "Would you recommend GeeksforGeeks to your friend?";
    label6.style.display = "block";
    form.appendChild(label6);
    const division = document.createElement("div");
    const recommendYes = document.createElement("input");
    recommendYes.type = "radio";
    recommendYes.name = "isRecommend";
    recommendYes.value = "yes";
    division.appendChild(recommendYes);
    let label7 = document.createElement("label7");
    label7.innerText="Yes";
    division.appendChild(label7);
    form.appendChild(division);
    const division2 = document.createElement("div");
    const recommendNo = document.createElement("input");
    recommendNo.type = "radio";
    recommendNo.name = "isRecommend";
    recommendNo.value="no";
    division2.appendChild(recommendNo);
    let label8 = document.createElement("label");
    label8.innerText = "No";
    division2.appendChild(label8);
    form.appendChild(division2);
    const division3 = document.createElement("div");
    const recommendMayBe = document.createElement("input");
    recommendMayBe.type = "radio";
    recommendMayBe.name = "isRecommend";
    recommendMayBe.value = "may be";
    division3.appendChild(recommendMayBe);
    let label9 = document.createElement("label");
    label9.innerText = "May be";
    division3.appendChild(label9);
    form.appendChild(division3);

    const label10 = document.createElement("label");
    label10.innerText = "Language and Frameworks known(check all that apply)";
    form.appendChild(label10);
    const input1 = document.createElement("input");
    input1.type = "checkbox";
    input1.name = "skill";
    input1.value = "C";
    const br1 = document.createElement("br");
    br1.style.display = "block";
    form.appendChild(br1);
    form.appendChild(input1);
    // const label11 = document.createElement("label");
    // label11.innerText ="C";
    form.appendChild(document.createTextNode("C"));
    const input2 = document.createElement("input");
    input2.type = "checkbox";
    input2.name = "skill";
    input2.value = "C++";
    const br2 = document.createElement("br");
    br1.style.display = "block";
    form.appendChild(br2);
    form.appendChild(input2);
    // const label12 = document.createElement("label");
    // label12.innerText = "C++";
    form.appendChild(document.createTextNode("C++"));
    const input3 = document.createElement("input");
    input3.type = "checkbox";
    input3.name = "skill";
    input3.value = "C#";
    const br3 = document.createElement("br");
    br3.style.dsplay = "block";
    form.appendChild(br3);
    form.appendChild(input3);
    form.appendChild(document.createTextNode("C#"));
    const input4 = document.createElement("input");
    input4.type = "checkbox";
    input4.name = "skill";
    input4.value = "java";
    const br4 = document.createElement("br");
    br4.style.display = "block";
    form.appendChild(br4);
    form.appendChild(input4);
    form.appendChild(document.createTextNode("Java"));
    const input5 = document.createElement("input");
    input5.type = "checkbox";
    input5.name = "skill";
    input5.value = "python";
    const br5 = document.createElement("br");
    br5.style.display = "block" ;
    form.appendChild(br5);
    form.appendChild(input5);
    form.appendChild(document.createTextNode("Python"));

    const input6 = document.createElement("input");
    input6.type = "checkbox";
    input6.name = "skill";
    input6.value = "JS";
    const br6 = document.createElement("br");
    br6.style.display = "block";
    form.appendChild(br6);
    form.appendChild(input6);
    form.appendChild(document.createTextNode("JavaScript"));
    
    const input7 = document.createElement("input");
    input7.type = "checkbox";
    input7.name = "skill";
    input7.value = "React";
    const br7 = document.createElement("br");
    br7.style.display = "block";
    form.appendChild(br7);
    form.appendChild(input7);
    form.appendChild(document.createTextNode("React"));
    
    const input8 = document.createElement("input");
    input8.type = "checkbox";
    input8.name = "skill";
    input8.value = "Angular";
    const br8 = document.createElement("br");
    br8.style.display = "block";
    form.appendChild(br8);
    form.appendChild(input8);
    form.appendChild(document.createTextNode("Angular"));

    const input9 = document.createElement("input");
    input9.type = "checkbox";
    input9.name = "skill";
    input9.value = "Django";
    const br9 = document.createElement("br");
    br9.style.display = "block";
    form.appendChild(br9);
    form.appendChild(input9);
    form.appendChild(document.createTextNode("Django"));

    const input10 = document.createElement("input");
    input10.type = "checkbox";
    input10.name = "sill";
    input10.value = "spring";
    const br10 = document.createElement("br");
    br10.style.display = "block";
    form.appendChild(br10);
    form.appendChild(input10);
    form.appendChild(document.createTextNode("Spring"));

    const label13 = document.createElement("label");
    label13.innerText = "Any Comment or Suggestion";
    const br11 = document.createElement("br");
    br11.style.display = "block";
    form.appendChild(br11);
    form.appendChild(label13);
    const textArea = document.createElement("textarea");
    textArea.cols = 80;
    textArea.rows = 5;
    const br12 = document.createElement("br");
    br1.style.display = "block";
    form.appendChild(br12);
    form.appendChild(textArea);
    const submit = document.createElement("button");
    submit.className = "btn";
    submit.type="submit";
    submit.value="Submit";
    submit.appendChild(document.createTextNode("Submit"));
    submit.style.display="block";
    form.appendChild(submit);
    formContainer.appendChild(form);
    document.body.appendChild(formContainer);
}

