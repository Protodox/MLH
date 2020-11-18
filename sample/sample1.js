describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 fields are filled in', function () {
            browser.url('');
            const inputName = $(sel.name).setValue(data.name);
            const inputGender = $$(sel.gender)[data.gender.she].click();
            const inputAge = $(sel.age).setValue(data.age);
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[data.storyType.Comedy].click();
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true)
        });