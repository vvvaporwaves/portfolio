---
title: 'legislate.me'
subtitle: 'A legal assistant to help centralize information about local, and federal bills in Canada.'
preview-url: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/Ri9kmypcbOYjrlSzq3l0Ec/legislate.me?type=design&node-id=171-493&t=lPL0VxAA92tqak0M-0&scaling=scale-down&page-id=171%3A492&starting-point-node-id=171%3A493'
preview-image: '../../assets/images/legislate-me.png'
date: 2024-01-31
duration: '2 months'
tags: ['figma', 'research', 'interaction', 'ui']
---

##### Legislate.me is a mobile app prototype made with the intent of creating a centralized place for Canadians to look up and gather information about bills being passed – or that have passed – on all levels, from municipal to federal.

### Challenges

1. Centralize information and updates on local and federal government bills
2. Help users streamline research into bills
3. Offer explanations to help users understand proposed and passed government bills

## Research

### Examining competition (Competitive Audit)

In the domain of government bills and text, there are some companies and apps that exist to help their audiences better understand ongoing, or recently passed, bills. However, the ones specialized in this realm are often **paid and business-orientated**, meaning they aren't advertised or accessible to the average individual.

Often, they offer services that include AI generated summaries mixed with advice from legal professionals, and specifically aim to help businesses take preventative action when it comes to new bills.

On the other hand, while there are many free-to-use summarization tools online, and even AI-backed ones such as ChatGPT, they are often plagued with character limits, or require users to copy and paste text directly into their text boxes to start the summarization process.

### Preliminary Interviews

I conducted interviews with five young adults, ranging from early 20s to 30, all with varying levels of political activity, and legal knowledge and familiarity.

The **standout observation** I made during the interview process with these primary users was that **majority of them preferred to do their own research** and expressed **wanting to see as many sides of a story as possible** before coming to their own conclusions.

As well, many of them noted that **social media**, and **information shared via word-of-mouth** played a large role in their information gathering and research.

### Modeling

Based off of the interviews, the clearest picture of a primary user was **someone who wants to know more but doesn't know where to start** when it comes to bills and the process behind passing them. With this knowledge in mind, I created three user personas to cover a wide range of potential users who may fall into this category.

#### Interview Insights

- All preferred to read text on mobile devices
- Many mentioned being able to share information as important to them
- Many mentioned wanting to do their own research, and find information from different sources

#### Defining app requirements

A big factor in the creation of this project was **scope and size** , which were both kept small as this was meant to be a single person project. I had to be specific when it came to the app requirements, and this required me to keep the functionality to a bare minimum.

For me, based off the interviews I did, looked like this:

- Bills are easy to read.
- Mobile first
- Shareable
- Can provide resources for expanding knowledge.

## Architecture, Wireframing and Refinement

### Architecture

<figure class="one-img">
<img src="https://i.postimg.cc/SmjdYrKv/information-architecture.png" alt="Rough outline for information architecture of Legislate . me" />
<figcaption> The development of legsislate.me's information architecture</figcaption>
</figure>

Before the wireframing process and with the app requirements in mind, I laid out the **information architecture** to help lay out the user flow and manage the number of screens I was planning to create.

### Wireframing

With the architecture laid out, it became easier to visualise the user's journey, and helped kickstart the iteration process for the screen designs. For each screen, I aimed to roughly create 6 to 8 different iterations of each screen. 

<figure class="five-img">
<img src="https://i.postimg.cc/ZbPxzsfC/home-page.png" alt="Home wireframe">
<img src="https://i.postimg.cc/syyJ4yXS/browse-page.png" alt="Browse wireframe">
<img src="https://i.postimg.cc/38QF6QFs/following-page.png" alt="Following wireframe">
<img src="https://i.postimg.cc/093fYwM2/bill-page.png" alt="Bill wireframe">
<img src="https://i.postimg.cc/HpytBkX0/terms-dictionary.png" alt="Terms & dictionary wireframe">
<figcaption>From top left to right: home, browse, following, bill page, terms & dictonary</figcaption>
</figure>

Once this process was complete, I picked out parts I liked and laid out cohesive design that I would then take into Figma to refine into a Lo-Fi wireframe and prototype.

<figure class="one-img">
<img src="https://i.postimg.cc/G2nFzT19/overall-layout.png" alt="Chosen layouts for each screen"/>
<figcaption>The chosen layouts for each screen</figcaption>
</figure>

### Refinement

From here, I took the design into Figma, and recreated first as a wireframe, and then as a low fidelity mock up. 

<figure class="one-img">
<img src="https://i.postimg.cc/8k5JXZx8/legislate-me.png" alt="Digital wireframe"/>
<figcaption>Digital wireframe</figcaption>
</figure>

<figure class="one-img">
<img src="https://i.postimg.cc/qJQ6GPbX/legislate-me-2.png" alt="Low fidelity mock-up"/>
<figcaption>Low fidelity mock-up</figcaption>
</figure>

The biggest change the design took on in this process was the change from a light-based design to a dark-based design. This choice was made after consideration was taken into the default setting of dark mode on many mobile apps, such as messaging or social media apps. 

As well, while in the wireframing stage, I thought it would be useful to provide a separate page solely for bills that users chose to follow. However, upon further consideration, I decided to leave out this page and instead add a spot for followed bills on the home page.

## Final Design

With the low fidelity designs solidified and laid out, I conducted a set of **two usability studies** with them to gauge user flows, interactions, and thoughts. Over the course of these usability studies, the interviewees had similar comments around legislate.me's design.

The comments boiled down to three main factors, which were: 
- The app felt cramped, with too much small text, in too little space
- More descriptors for bills would be appreciated for understanding
- Lack of indicators on text vs. links made it hard to differentiate

With these three main factors in mind, I re-visited the mock-up and made changes that would help remedy these issues. 

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRi9kmypcbOYjrlSzq3l0Ec%2Flegislate.me%3Ftype%3Ddesign%26node-id%3D171%253A492%26mode%3Ddesign%26t%3DlPL0VxAA92tqak0M-1" allowfullscreen></iframe>

To start, I removed the column layouts prevalent throughout the app, and removed the rounded rectangle containers that I gave the bill displays to allow the text more space to breath. As well, I doubled the spacing throughout the app to make it less cramped, while also bumping the text size from 14 to 18 for regular text. I also adjusted all other font sizes to match accordingly. 

On the homepage, I added buttons to display what each bill is tagged with, which reflect common themes and content addressed by the bill. This was done to allow users more understanding at-a-glance. 

Finally, I added colour to the design, specifically focusing it on interactables to help users differentiate between what is interactive and what isn't. The colours that were chosen are specifically muted versions of the colours used on the bills page on the [Parliament of Canada's bills page](https://www.parl.ca/legisinfo/en/bills). 

## Conclusion

Though I believe I reached a satisfactory end design for this form of legislate.me, I know that this project has the potential to be expanded further and at some point, I plan to expand it with a desktop design as well.

Overall, I learned a great deal about the UX research process. In specific, I gained valuable experience when it comes to being a moderator and gained a new perspective on how to craft better interview questions. 

In terms of the design process, I did a lot of research and gained a lot of knowledge when it comes to Figma, and how to better adapt user feedback into executable and tangible changes to better their journeys with my designs. 
