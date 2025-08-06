// <<<<<<<<<<<<<<<<<<<<<<<<<<-------------------------Git and github ---------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>

// 🧠 Git kya hai? (What is Git?)

// Git ek version control system hai.
// Iska matlab: jab aap code likhte ho, Git aapke code ke har version ko track karta hai — jaise ek time machine!

// 🔧 Git ke kaam:

// - Code ke purane versions ko dekhna ya wapas lana
// - Team ke saath milke kaam karna bina kisi conflict ke
// - Code mein kya changes hue, kab hue, kisne kiye — sabka record

// 🗂️ Example:

// Maan lo aap ek JavaScript project bana rahe ho. Aapne ek feature add kiya,
//  par baad mein laga ki purana version better tha — Git se aap easily purane version pe wapas ja sakte ho.

// 🌐 GitHub kya hai? (What is GitHub?)

// GitHub ek website hai jahan aap Git ka use karke apna code online store kar sakte ho.
// Yeh ek cloud platform hai jahan developers apna code share, collaborate, aur manage karte hain.
// 🧰 GitHub ke features:
// - Code ko online save karna (repository banake)
// - Dusre developers ke saath milke kaam karna
// - Open-source projects dekhna aur contribute karna
// - Issues aur pull requests ke through feedback lena
// 🧑‍💻 Example:
// Aapne ek JavaScript game banaya aur GitHub pe upload kiya. 
// Ab koi aur developer usme naye features add karna chahta hai — wo “pull request” bhej sakta hai,
//  aur aap decide karte ho ki uska code merge karna hai ya nahi.


// <<<<<<<<<<<<<<<<<<-------------------hidden file ko dekhna --------------------->

// common => ls force


// <<<<<<<<<<<<<<<<<------------------------clone commond ------------------------>>>>>>>>>>>>>>>>>>>>>>>>>

// 🧬 Git Clone Command Kya Hai?
// Purpose: Kisi remote Git repository (jaise GitHub) ko apne local computer par copy karna.
// 🔹 Basic Syntax:
// git clone <repository-url>


// 🔹 Example:
// git clone https://github.com/username/project-name.git



// 🪜 Step-by-Step Clone Process (Hindi + English)
// ✅ 1. Git Installed Hai?
// Terminal mein check karo:
// git --version


// Agar version show ho raha hai (jaise git version 2.42.0), to installed hai.

// ✅ 2. GitHub Repository Link Copy Karo
// GitHub pe jao → apni repo open karo → "Code" button pe click karo → HTTPS link copy karo
// Example: https://github.com/vinay/sigma-demo.git

// ✅ 3. Terminal Open Karo & Clone Command Run Karo
// git clone https://github.com/vinay/sigma-demo.git


// Ye command kya karega:
// - GitHub se pura project folder download karega
// - Tumhare current directory mein ek naya folder banega (e.g. sigma-demo)

// ✅ 4. Us Folder Mein Enter Karo
// cd sigma-demo


// Ab tum us repo ke andar ho, aur Git commands use kar sakte ho (jaise git status, git log, etc.)
