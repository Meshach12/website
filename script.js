document.getElementById('courseSearch').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const courses = document.querySelectorAll('.courses .course');

    courses.forEach(course => {
        const courseTitle = course.querySelector('h3').textContent.toLowerCase();
        if (courseTitle.includes(query)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
});
