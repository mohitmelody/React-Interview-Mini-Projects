const data = 
    [
        {
            id: 1,
            question: "1. What is an accordion in React?",
            answer: " An accordion is a UI component that allows users to expand and collapse sections of content. It is typically used to organize information in a compact way, enabling users to show or hide sections as needed."
        },
        {
            id: 2,
            question: "2. How do I create a basic accordion in React?",
            answer: "You can create a basic accordion by using state to manage which section is open. You'll need a component that renders multiple sections, each with a button to toggle its visibility. For example, use useState to track the currently open section and conditionally render the content based on that state."
        },
        {
            id: 3,
            question: "3. Can I customize the styles of the accordion?",
            answer: "Yes, you can customize the styles of an accordion using CSS. You can apply classes or inline styles to the accordion and its sections, changing properties like background color, padding, and transitions for a better user experience."
        },
        {
            id: 4,
            question: "4. What are some accessibility considerations for an accordion?",
            answer: " To allow multiple sections to be open simultaneously, you can maintain an array of open section IDs in your state. Update this array whenever a section is toggled, adding or removing the ID as needed. Then, check if a section's ID exists in the array to determine its visibility."
        },
        {
            id: 5,
            question: "5. How can I handle multiple sections being open at the same time?",
            answer: "When building an accordion, it's essential to ensure it is accessible. Use appropriate ARIA roles like role='button' for the toggle elements and aria-expanded to indicate whether a section is open. Ensure keyboard navigation is smooth, allowing users to use the Tab and Enter keys to interact with the accordion."
        }
        
      
    ]
    


export default data