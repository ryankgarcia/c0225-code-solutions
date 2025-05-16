# unit-tests-jest-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are unit tests?

unit tests are a function that allows us to test how our code is functioning and if its doing what we want it to do

- Why is it important to write unit tests?

unit tests are important because they test our codes functionality and allow us as developers to be able to refactor our code and check to see if it is still doing what we want it to do, allowing us to write the best code possible and to verify if our code is working correctly

- What code should be tested with a unit test? What code is not well suited for unit tests?

you want to test code that might have bugs. this is what you would want to. test the code that you are writing, not other peoples code.

the code that should be tested with a unit test is a small amount of code.
we wouldn't do a unit test on an entire code base, or running tests on things that go into third party systems or end-to-end test.

- What is Jest? What are some other popular JavaScript unit testing frameworks?

Jest is the most popular JavaScript unit testing framework written by Facebook.
Mocha runs inside the browser. Ava and Vitest

## Notes

A unit test is a way of testing the smallest piece of code that can be logically isolated in a software application. In most languages, that is a function, a method, or a property. It must be simple and not test multiple things at once. It tests one thing at a time, which is commonly a function.

TestComplete is a popular test tool. Kent Beck create the SUnit which is the mother of all unit testing frameworks. In his book 'The Art of Software Testing' he references unit tests.

Smaller is better. Small unit tests allow much more of a granular view of how your code is performing. The amazing thing about writing small units, your test can run fast. Thousands per second, which is what we want.

Unit tests are extremely helpful to allow developers to refactor the code while having proper safety measures.
Ideally, you write the test code first and then the production code. But you should best practice write code that tests your code to check how it is running. Tests can be easily run with every build(iteration) of your product as changes occur and notifying you when code changes in unexpected ways.

Unit testing is great because it means less feeding the documentation, since the unit tests check the work for you.

**Avoid creating unit tests that cross system borders and touch base with third party systems.**
If you want to test larger pieces of your product at a time, investigate other frameworks.
It is risky to test end-to-end tests. This requires careful ordering, dependencies on other tests, and careful setup to get your system in a 'test ready' state.

Jest uses 'matchers' to let you test values in different ways.
It is good practice to make sure the test you are adding fails. This way you can verify if it is actually working when you call it. To make the first test fail, add the matcher ' expect(false).toBe(true); '
