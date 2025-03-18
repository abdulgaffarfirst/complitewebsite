// watch and date create
function updateDateTime() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1; // মাস ০ থেকে শুরু হয়, তাই ১ যোগ করতে হয়
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // ঘন্টা, মিনিট, সেকেন্ডের জন্য ২ ডিজিটের সংখ্যা প্রদর্শন করা
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var dateTimeString = "তারিখ: " + day + "/" + month + "/" + year + " | সময়: " + hours + ":" + minutes + ":" + seconds;
    
    document.getElementById("date-time").innerHTML = dateTimeString;
}

// প্রতি সেকেন্ডে ডেট এবং টাইম আপডেট হবে
setInterval(updateDateTime, 1000);



// স্লাইডারের সমস্ত স্লাইডের রেফারেন্স
let slides = document.querySelectorAll('.slide');
let currentIndex = 0;  // প্রথম স্লাইডের জন্য সূচক
let isForward = true;  // ফরওয়ার্ড স্লাইডিং বা রিভার্স স্লাইডিং বোঝানোর জন্য

// স্লাইডারের টাইমিং
let slideInterval = setInterval(slide, 2000);  // প্রতি 2 সেকেন্ড পর পর স্লাইড হবে

function slide() {
    if (isForward) {
        // ফরওয়ার্ড স্লাইডিং
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            isForward = false;  // শেষ স্লাইডে পৌঁছানোর পর রিভার্স হবে
            currentIndex--;  // রিভার্স স্লাইডিং শুরু করার জন্য ইন্ডেক্স ২ করতে হবে
        }
    } else {
        // রিভার্স স্লাইডিং
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            isForward = true;  // প্রথম স্লাইডে পৌঁছানোর পর ফরওয়ার্ড স্লাইডিং হবে
            currentIndex++;  // ফরওয়ার্ড স্লাইডিং শুরু করার জন্য ইন্ডেক্স ১ করতে হবে
        }
    }
    updateSlider();
}

function updateSlider() {
    let newTransformValue = -currentIndex * 100;  // নতুন ট্রান্সফর্ম ভ্যালু গণনা
    document.querySelector('.slider-container').style.transform = `translateX(${newTransformValue}%)`;
}



