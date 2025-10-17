// form.js

// Issue Category: Other Field Smooth
const issueCategory = document.getElementById('issueCategory');
const otherCategoryDiv = document.getElementById('otherCategoryDiv');

if (issueCategory) {
    issueCategory.addEventListener('change', function() {
        if (this.value === "Other") {
            otherCategoryDiv.style.display = "block";
            otherCategoryDiv.style.opacity = 0;
            document.getElementById('otherCategory').required = true;
            setTimeout(() => {
                otherCategoryDiv.style.transition = "opacity 0.3s ease";
                otherCategoryDiv.style.opacity = 1;
            }, 10);
        } else {
            otherCategoryDiv.style.transition = "opacity 0.3s ease";
            otherCategoryDiv.style.opacity = 0;
            setTimeout(() => {
                otherCategoryDiv.style.display = "none";
                document.getElementById('otherCategory').required = false;
            }, 300);
        }
    });
}

// Form Submit Smooth (Toast)
const form = document.getElementById('helpdeskForm');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.reset();
        if (otherCategoryDiv) otherCategoryDiv.style.display = "none";

        // buat toast
        let toast = document.createElement('div');
        toast.innerText = "Tiket berhasil dikirim!";
        toast.style.position = "fixed";
        toast.style.bottom = "20px";
        toast.style.right = "20px";
        toast.style.backgroundColor = "#0d6efd";
        toast.style.color = "#fff";
        toast.style.padding = "12px 20px";
        toast.style.borderRadius = "5px";
        toast.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
        toast.style.opacity = 0;
        toast.style.transition = "opacity 0.5s ease";
        document.body.appendChild(toast);

        setTimeout(() => { toast.style.opacity = 1; }, 10);
        setTimeout(() => { toast.style.opacity = 0; }, 2500);
        setTimeout(() => { document.body.removeChild(toast); }, 3000);
    });
}
