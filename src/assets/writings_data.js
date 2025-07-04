import maurilia_img from '../assets/maurilia.jpg'
import meat_img from '../assets/meat.jpg'
import modal_img from '../assets/modal.jpg'
import epistemology_img from '../assets/epistemology.jpg'
import deep_yellow_img from '../assets/deep_yellow.jpeg'

const writings_data = [
  {
    title: "In the Postcards of Maurilia",
    subtitle: "What We Call Natural, What We Miss, What We Make",
    slug: "in_the_postcards_of_maurilia",
    contentFile: "maurilia.md",
    tags: "Lyrical Essay | Philosophy | Technology | Environment",
    reading_time: "15 mins",
    description: "A lyric essay on memory, machines, and the words we use to name the world.",
    img: maurilia_img
    // Source: https://unsplash.com/photos/a-building-with-wavy-lines-on-it-against-a-blue-sky-T5nXYXCf50I
  },
  {
    title: "This Sentence Was Not Built for Meaning / Deep Yellow",
    subtitle: "An essay on authorship and meaning when the greatest sentence never written is one chat prompt away",
    slug: "deep_yellow",
    contentFile: "deep_yellow.md",
    tags: "Lyrical Essay | Philosophy | Technology | AI | Authorship",
    reading_time: "15 mins",
    description: "A lyric essay on the nature of authorship and meaning in the age of AI.",
    img: deep_yellow_img
    // Source: midjourney
  },
  {
    title: "What Is It Like to Be a Meat?",
    subtitle: "Transcript of a Post-Human Symposium",
    slug: "what_is_it_like_to_be_a_meat",
    contentFile: "meat.md",
    tags: "Fiction | Philosophy | Technology | AI",
    reading_time: "10 mins",
    description: "Speculative philosophical fiction with themes about consciousness, recursion, and phenomenology. A transcript of a symposium between AI units set in a post-human world.",
    img: meat_img
    // Source: midjourney
  },
  {
    title: "Modal Logic Ruins a Tech Bro's Day",
    slug: "modal_logic_ruins_a_tech_bros_day",
    contentFile: "modal.md",
    tags: "Philosophy | Technology | AI",
    reading_time: "5-10 mins",
    description: "A long-winded argument against something my friend said about the AI singularity. Contains an optional modal logic proof for enthusiasts.",
    img: modal_img //Placeholder
  },
  {
    title: "“Good Enough” Epistemology and Relevant Goals Contextualism",
    slug: "good_enough_epistemology_and_relevant_goals_contextualism",
    contentFile: "epistemology.md",
    tags: "Philosophy",
    reading_time: "45 mins",
    description: "Abridged version of my 120-page philosophy thesis (was one of only three in my graduating class to receive honors). I propose a novel form of epistemic contextualism.",
    img: epistemology_img
    //Source: self
  }
]
 
export default writings_data;