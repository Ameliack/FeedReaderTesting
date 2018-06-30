/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL is defined and is not empty', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined(); //this checks whether or not the url has been defined
            expect(feed.url).not.toBe(0); //expects the url not to be empty
          });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Name is defined', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined(); //checks if there are feed names
             expect(feed.name).not.toBe(0); //expects the feed name not to be empty
           });
         });
    });
    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       it('The menu element is hidden by default', function() {
        expect($('body').hasClass('menu-hidden')).toEqual(true); //i found the class 'menu-hidden' in index.html
       });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('Menu changes visibility when menu icon is clicked', function() {
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).not.toBe(true); //when the user clicks on the hamburger icon, then the hidden menu opens

          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
       beforeEach(function (done) {
         loadFeed(0, function() {
           done();
         });
       });
       it('loadFeed function called, defined if entry has at least 1 entry element', function(done) {
          expect($('.feed .entry')).not.toBeUndefined(); //this is defining the .feed and .entry
          done();
       });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
       beforeEach(function (done) {
         loadFeed(0, function() {
           firstFeed = $('.feed').html();

           loadFeed(1, function() {
             done();
           }); //this is comparing the first feed loaded to the second feed loaded to see if they are different
         });
       });
       it('When new feed loaded, content changes', function(done) {
         expect(firstFeed).not.toBe($('.feed').html());
         done();
       });
    });

}());
