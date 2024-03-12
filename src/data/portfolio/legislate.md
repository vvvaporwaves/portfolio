---
title: 'legislate.me'
subtitle: 'A legal assistant to help young people have a centralized source of information about local, and federal bills in Canada.'
preview-url: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/Ri9kmypcbOYjrlSzq3l0Ec/legislate.me?type=design&node-id=171-493&t=lPL0VxAA92tqak0M-0&scaling=scale-down&page-id=171%3A492&starting-point-node-id=171%3A493'
preview-image: '../../assets/images/legislate-me.png'
banner-image: '../../assets/images/legislate-me/header.png'
date: 2024-01-31
duration: '2 months'
tags: ['figma', 'research', 'interaction', 'ui']
---

<div class="section lg:min-w-[1000px] flex justify-around -mt-3">

<div>

**<span class="text-pink">ROLE:</span>** Lead Designer</div>

<div>

**<span class="text-pink">DURATION:</span>** November 2023 - January 2024 (2.5 Months)</div>

</div>

<div class="section">

### legsilate.me aims to tackle <b>three main challenges</b>:

1. Centralize information and updates on local and federal government bills
2. Help users streamline research into bills
3. Offer explanations to help users understand proposed and passed government bills
</div>

<div class="section-container">
<div class="section">

## Examining competition

In the domain of government bills and text, there are some companies and apps that exist to help their audiences better understand ongoing, or recently passed, bills. However, the ones specialized in this realm are often **paid and business-orientated**, meaning they aren't advertised or accessible to the average individual.

Often, they offer services that include AI generated summaries mixed with advice from legal professionals, and specifically aim to help businesses take preventative action when it comes to new bills.

On the other hand, while there are many free-to-use summarization tools online, and even AI-backed ones such as ChatGPT, they are often plagued with character limits, or require users to copy and paste text directly into their text boxes to start the summarization process.

<div class="table-container legislate">

<table>
<thead><tr>

<th id="company">Company</th>
<th id="summarization">Summarization</th>
<th id="dictionary">Built-in Dictionary</th>
<th id="free">Free to Use</th>
<th id="sharing">Quick Sharing</th>
<th id="location">Sort by Location</th>
<th id="canada">Canada-focused</th>
<th id="news">Displays Related News</th>
<th id="tracking">Bill Tracking</th>

</tr></thead>

<tbody><tr>

<td headers="company">Open Parliament</td>
<td headers="summarization">Yes</td>
<td headers="dictionary">No</td>
<td headers="free">Yes</td>
<td headers="sharing">No</td>
<td headers="location">Yes</td>
<td headers="canada">No</td>
<td headers="news">No</td>
<td headers="tracking">No</td>

</tr><tr>

<td headers="company">Fiscal Note</td>
<td headers="summarization">Yes</td>
<td headers="dictionary">Yes</td>
<td headers="free">No</td>
<td headers="sharing">No</td>
<td headers="location">No</td>
<td headers="canada">No</td>
<td headers="news">Yes</td>
<td headers="tracking">No</td>

</tr><tr>

<td headers="company">Plural</td>
<td headers="summarization">Yes</td>
<td headers="dictionary">No</td>
<td headers="free">Limited</td>
<td headers="sharing">Yes</td>
<td headers="location">No</td>
<td headers="canada">No</td>
<td headers="news">Paid Option</td>
<td headers="tracking">Yes</td>

</tr><tr>

<td headers="company">leg.bc.ca</td>
<td headers="summarization">No</td>
<td headers="dictionary">No</td>
<td headers="free">Yes</td>
<td headers="sharing">Yes</td>
<td headers="location">Yes</td>
<td headers="canada">Yes</td>
<td headers="news">No</td>
<td headers="tracking">No</td>

</tr><tr>

<td headers="company">parl.ca</td>
<td headers="summarization">Limited</td>
<td headers="dictionary">No</td>
<td headers="free">Yes</td>
<td headers="sharing">Yes</td>
<td headers="location">No</td>
<td headers="canada">Yes</td>
<td headers="news">No</td>
<td headers="tracking">No</td>

</tr></tbody>

</table>

</div></div></div>

<div class="section">

## Preliminary Interviews

I conducted interviews with five young adults, ranging from early 20s to 30, all with varying levels of political activity, and legal knowledge and familiarity. I functioned as both a moderator and note-taker over the full duration of all the interviews conducted.

### STANDOUT OBSERVATION
- Majority of users **preferred to do their own research,** and see as many sides and perspectives as possible before coming to their own conclusion.

<figure class="one-img">
<img src="/images/legislate-me/affinity-map.png" alt="Image of affinity mapping practice" />
<figcaption>Part of the affinity mapping process</figcaption>
</figure>

Other notable discoveries that were made over the course of my interviews included: 
- Social media and word-of-mouth played a large role in information gathering and research
- Users sometimes neglected research when resources were very scattered
- Political and legal language makes reading bills and laws intimidating
- Many preferred to read text on mobile devices, often in bed


</div>

<div class="section-container">
<div class="section">

## Modeling

With these insights in mind, I was able to put together a clearer picture of what legislate.me's primary might look like. This being, **someone who wants to know more, but doesn't where to start** when it comes to bills and the process behind passing them.

### User Persona

<div class="user-persona virgil">

<figure class="h-full">
<img class="max-w-max" src="/images/legislate-me/user-persona-virgil.png" alt="Image of user persona, Virgil Lionel" />
</figure>

#### Virgil Lionel

- **Age:** 24
- **Education:** University Graduate
- **Hometown** Toronto, ON
- **Family:** Mom, dad; Large extended family
- **Occupation:** Social Media Manager

<div class="grid lg:grid-cols-2 my-5">

<div>

##### Goals
- Share bills with friends and family easily and quickly
- Stay informed on local & federal bills

</div>

<div>

##### Frustrations
- Family members aren't tech-savvy
- Doesn't have time to constantly do his own research on recent events and bills

</div>

</div>

**<span class="text-pink">USER STORY</span>:** As a 24 year old, social media manager, I want to stay on top of government bills and be able to share information with others easily. 

</div>

<hr>

### Defining app requirements

A big factor in the creation of this project was **scope and size**, which were both kept small as this was meant to be a single person project. I had to be specific when it came to the app requirements, and this required me to keep the functionality to a bare minimum.

For me, based off the interviews I did, functionality revolved around these factors:

- Bill summaries are easy to read.
- Pages and information should be easily shareable.
- Users should be provided resources to exapand their knowledge, if they so choose.

</div></div>

<div class="section">

## Information Architecture

Before the wireframing process and with the app requirements in mind, I planned the information architecture to help lay out the user flow and manage the number of screens I was planning to create.

<figure class="one-img">
<img src="/images/legislate-me/information-architecture.png" alt="Rough outline for information architecture of Legislate . me" />
<figcaption> The development of legsislate.me's information architecture</figcaption>
</figure>

</div>

<div class="section-container">
<div class="section">

## Wireframing

With the architecture laid out, it became easier to visualise the user's journey, and helped kickstart the iteration process for the screen designs. 

For each screen, I aimed to roughly create 6 to 8 different iterations of each screen. 

<figure class="five-img">
<img src="/images/legislate-me/home-page.png" alt="Home wireframe">
<img src="/images/legislate-me/browse-page.png" alt="Browse wireframe">
<img src="/images/legislate-me/following-page.png" alt="Following wireframe">
<img src="/images/legislate-me/bill-page.png" alt="Bill wireframe">
<img src="/images/legislate-me/terms-dictionary.png" alt="Terms & dictionary wireframe">
<figcaption>From top left to right: home, browse, following, bill page, terms & dictonary</figcaption>
</figure>

Once I finished with the iteration process, I went back to pick parts of the wireframes that I liked to synthesize into a final design. 

Aspects such as a list layout for common searches on the browse page and for related texts on the terms / dictionary page, and subheaders for the bills on the home page were ones that I believed would help simplify and add clarity to a user's journey through the app.

<figure class="one-img">
<img src="/images/legislate-me/overall-layout.png" alt="Chosen layouts for each screen"/>
<figcaption>The chosen layouts for each screen</figcaption>
</figure>

With the screens finalized, I took them into Figma to see how they would look in a digital space, and to gain more experience with the software.

<figure class="one-img">
<img src="/images/legislate-me/digital-wireframe.png" alt="Digital wireframe"/>
<figcaption>Digital wireframe</figcaption>
</figure>

As well, while in the wireframing stage, I thought it would be useful to provide a separate page solely for bills that users chose to follow. However, upon further consideration, I decided to leave out this page and instead add a spot for followed bills on the home page to simpify the number of clicks needed in a user's journey, and to simplify the app's layout. 

</div></div>

<div class="section">

## Testing

With the design wireframed in Figma, I decided I wanted to refine it more and add in actual text and content to give myself the ability to continue practicing with Figma, and to gain more experience by conducting a set of usability studies with a prototype.

During this process, the design went from a light-based design to a dark-based design. This choice was made after consideration was taken into the default setting of dark mode on many popular, mobile apps, such as messaging or social media apps, and after reviewing feedback from my initial interviews, where those interviewed expressed preference for dark designs when it comes to reading content on their mobile devices.

<figure class="one-img">
<img src="/images/legislate-me/low-fidelity.png" alt="Mid fidelity mock-up"/>
<figcaption>Prototype mock-up</figcaption>
</figure>

With the prototype completed, I conducted a set of **three usability studies** to gauge user flows, interactions, and thoughts. Over the course of these usability studies, the interviewees had similar comments around legislate.me's design.

</div>

<div class="section-container">
<div class="section">

## Refinement

The comments boiled down to three main factors.

<br>

##### <span class="text-pink">1.</span> Lack of indicators on text vs. links made it hard to differentiate

<figure class="one-img left">
<img src="/images/legislate-me/comparison-colours.png" alt="Before and after colour additions"/>
<figcaption>Before and after adding colour</figcaption>
</figure>

To address this issue, I gave all interactable items [such as links, or buttons] a colour separate from the text colour. As well, I made sure to adjust the font weight for plain text links to add more difference, when contrasted against regular text. 

<hr>

##### <span class="text-pink">2.</span> The app felt cramped, with too much small text, in too little space

<figure class="one-img">
<img src="/images/legislate-me/comparison-columns.png" alt="Before and after layout and padding changes"/>
<figcaption>Before and after layout and padding changes</figcaption>
</figure>

For this issue, I removed the gray containers that I put the bills in, and removed the column layout throughout the app. 

By removing the containers, I was able to have more space to double the padding and margins for each section. With the removal of the column layout, bills were no longer squished together, and overall, the text and content of each bill was given more room to breathe in order to increase readability.

<hr>

##### <span class="text-pink">3.</span> More descriptors for bills would be appreciated for understanding

<figure class="one-img">
<img src="/images/legislate-me/comparison-tags.png" alt="Before and after adding additional tag descriptors"/>
<figcaption>Before and after adding additional tag descriptors</figcaption>
</figure>

For this final issue, rather than display a shorter summary of the bills, I opted to move the tags to the browse and home page so that users would be able to better understand common themes and ideas involved with the bill.

By removing these short summaries, this also help to lessen tightness and crowded nature of the text on the app.

<br>

### Design System

With these changes made, I decided to give myself practice in the creation of a design system by going back and gathering all the materials I used to create this version of legislate.me.

<br>

<div id="legislate-me" class="design-system">

<div>
<div>Typography</div>
</div>

<div class="grid grid-cols-2">
<div class="font-inter text-5xl mb-2">Inter</div>
<div class="font-courier text-5xl">Courier Prime</div>
<div class="h1">H1 Heading</div>
<div class="h2">H2 Heading</div>

<div>
<div class="h3">H3 Heading</div>
<div class="subtitle">SUBTITLE</div>
</div>

<div class="h4">H4 Heading</div>

<div class="text-[18px] mt-5">Body</div>

<div class="col-span-2 mt-5">

- **Inter** was chosen as the main font because for simplicity, familiarity and readability
- **Courier Prime** as the subtitle font for contrast

</div>
</div>

<div>
<div>Colour Palette</div>
</div>

<div>

### Primary Colours 

<div class="flex gap-3">

<div class="h-[100px] w-[100px] bg-[#121212] flex items-center justify-center">#121212</div>
<div class="h-[100px] w-[100px] bg-[#363636] flex items-center justify-center">#363636</div>
<div class="h-[100px] w-[100px] bg-[#4F919C] flex items-center justify-center">#4F919C</div>
<div class="h-[100px] w-[100px] bg-[#FFFFFF] flex items-center justify-center text-black">#FFFFFF</div>

</div>

<br>

### Alternate Accents

<div class="flex gap-3">

<div class="h-[100px] w-[100px] bg-[#B0576A] flex items-center justify-center">#B0576A</div>
<div class="h-[100px] w-[100px] bg-[#81A96D] flex items-center justify-center">#81A96D</div>
<div class="h-[100px] w-[100px] bg-[#74749F] flex items-center justify-center">#74749F</div>

</div>

<div class="mt-5">

- Colours were chosen as **muted and subtle** alternatives to the colours offered on the official website of the Parliament of Canada website. 
- Less vibrant, but brighter shades were chosen to foster a **calm and relaxed** tone throughout the app.
- Blue was the chosen as the main colour as blue is the main colour used on the Parliament of Canada website.

</div>

</div>

<div>
<div>Icons</div>
</div>

<div class="flex gap-8">

<figure class="one-img">
<img src="/images/legislate-me/active-icon.png" alt="Active icon"/>
<figcaption>Active icon</figcaption>
</figure>

<figure class="one-img">
<img src="/images/legislate-me/inactive-icon.png" alt="Inactive icon"/>
<figcaption>Inactive icon</figcaption>
</figure>

</div>

<div>
<div>Tags / Buttons</div>
</div>

<div>

<div class="block bg-[#4F919C] font-extrabold font-inter px-[6px] py-[2px] rounded-[7px] w-fit mb-5 cursor-pointer">Button</div>
<div class="button bg-[rgba(79,145,156,0.31)] w-fit px-[8px] pt-[4px] pb-[2px] font-courier rounded-[7px] mb-5 cursor-pointer">#DESCRIPTOR_TAG</div>
<div class="button px-[10px] py-[5px] font-inter border border-white rounded-[7px] w-fit">Current Status</div>

</div>

</div>

<a href="https://www.figma.com/proto/Ri9kmypcbOYjrlSzq3l0Ec/legislate.me?type=design&node-id=171-493&t=R92K4Eo0Rw6YyF30-0&scaling=scale-down&page-id=171%3A492&starting-point-node-id=171%3A493" target="_blank"><button class="ease-in-out duration-500 mt-4 py-[0.5rem] px-4 border border-white">view prototype</button></a>

</div></div>

<div class="section">

## Conclusion

Though I believe I reached a satisfactory end design for this form of legislate.me, I know that this project has the potential to be expanded further and at some point, I plan to expand it with a desktop design as well.

Overall, I learned a great deal about the UX research process. In specific, I gained valuable experience when it comes to being a moderator and gained a new perspective on how to craft better interview questions. 

In terms of the design process, I did a lot of research and gained a lot of knowledge when it comes to Figma, and how to better adapt user feedback into executable and tangible changes to better their journeys with my designs. 
</div>
