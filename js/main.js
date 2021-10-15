const courses = {
    coursesContainer: document.querySelector('#courses-container'),
    coursesCount: document.querySelector('#courses-container').childElementCount,
    courseWidth: document.querySelector('#courses-container').firstElementChild.clientWidth,
    counter: 0,
    nextBtn: document.querySelector('#next'),
    prevBtn: document.querySelector('#prev'),

    run() {
        this.coursesContainer.setAttribute('style', `width: ${this.coursesCount * this.courseWidth}`);

        this.nextBtn.addEventListener('click', () => this.next());

        this.prevBtn.addEventListener('click', () => this.counter > 0 ? this.prev() : false);
    },

    move() {
        this.coursesContainer.setAttribute('style', `transform: translateX(-${this.courseWidth * this.counter}px)`);
    },

    next() {
        this.counter++;
        this.move();
    },

    prev() {
        this.counter--;
        this.move();
    }
}

courses.run();