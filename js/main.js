const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-toggle_close");
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
menuClose.addEventListener("click", () => {
    menu.classList.remove("active");
});
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove("active");
    }
});
// -- loader --
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
        document.getElementById("content").classList.add("active");
    }, 3000);
});

// ---- about ----
document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach((header) => {
        header.addEventListener("click", function() {
            const item = this.parentElement;
            const isActive = item.classList.contains("active");
            document.querySelectorAll(".accordion-item").forEach((accItem) => {
                accItem.classList.remove("active");
            });
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});

function startCounter(id, target, speed) {
    let counter = document.getElementById(id);
    let value = 0;
    let interval = setInterval(() => {
        value++;
        counter.textContent = value + "%";
        if (value >= target) {
            clearInterval(interval);
        }
    }, speed);
}
startCounter("counter_one", 100, 15);
startCounter("counter_two", 100, 15);
startCounter("counter_three", 90, 15);
startCounter("counter_four", 85, 15);
startCounter("counter_five", 100, 15);
startCounter("counter_six", 100, 15);


window.addEventListener("load", () => {
    const text = "Ziad Abuolila";
    const typingContainer = document.getElementById("typing");
    let i = 0;
    const speed = 120;
    setTimeout(() => {
        typingContainer.style.visibility = "visible";

        function typeWriter() {
            if (i < text.length) {
                typingContainer.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }, 3400);
});
// --- contact_me ---
document.getElementById("sendBtn").addEventListener("click", function() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name === "" || email === "" || message === "") {
        showToast('error', 'Error!', 'Something went wrong.');
        return;
    }
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push({ name, email, phone, message });
    localStorage.setItem("messages", JSON.stringify(messages));
    showToast('success', 'Success!', 'Operation completed successfully.');
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
});
// ---
function showToast(type, title, message, duration = 5000) {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let icon = "";
    switch (type) {
        case "success":
            icon = "fa-circle-check";
            break;
        case "error":
            icon = "fa-circle-xmark";
            break;
        case "info":
            icon = "fa-circle-info";
            break;
        case "warning":
            icon = "fa-triangle-exclamation";
            break;
        default:
            icon = "fa-bell";
    }

    toast.innerHTML = `
        <div class="toast-icon">
        <i class="fas ${icon}"></i>
        </div>
        <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
    </div>
        <button class="toast-close">
        <i class="fas fa-times"></i>
        </button>
        <div class="toast-progress"></div>
    `;

    const container = document.querySelector(".toast-container");

    if (!container) {
        const newContainer = document.createElement("div");
        newContainer.className = "toast-container";
        document.body.appendChild(newContainer);
        newContainer.appendChild(toast);
    } else {
        container.appendChild(toast);
    }

    const closeButton = toast.querySelector(".toast-close");
    closeButton.addEventListener("click", () => {
        closeToast(toast);
    });

    const progress = toast.querySelector(".toast-progress");
    progress.style.animation = `progress-shrink ${
        duration / 1000
    }s linear forwards`;

    setTimeout(() => {
        closeToast(toast);
    }, duration);

    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
}

/**
 * Close and remove a toast
 * @param {HTMLElement} toast
 */
function closeToast(toast) {
    toast.classList.remove("show");

    setTimeout(() => {
        if (toast.parentElement) {
            toast.parentElement.removeChild(toast);
        }
    }, 300);
}

const style = document.createElement("style");
style.textContent = `
    @keyframes progress-shrink {
        0% { transform: scaleX(1); }
        100% { transform: scaleX(0); }
    }
`;
document.head.appendChild(style);