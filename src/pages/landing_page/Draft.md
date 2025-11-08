Automated Meetup Archiver

Python Selenium PostgreSQL Web Scraping ETL

An automated data ingestion pipeline that indexes all events from a Meetup group, then extracts structured details (e.g. date, attendees, location) and stores these in SQL tables. Information can be used for analysis of attendance trends and further understand user engagement.

DISCLAIMER
Not working as well as when this project started because of Meetup further locking down features/changing UI

BACKGROUND & MOTIVATION
This project started when I wanted to learn about my own attendance trends, both for fun and to use as data viz practice material. I created a Python script that went through all events I had attended, and used BeautifulSoup4 (BS4) to extract all relevant metadata from each event page, and saves the result to a csv.

As I was browsing Reddit at a later time, I ran across a discussion by users contemplating migrating off Meetup or had done so. One thread of complaint they shared is the difficulty of archiving data, which was slowing down their migration progress. Another similar complaint was how once common Meetup features were increasingly being locked behind a subscription paywall.

With a script that already does some of the work, these complaints posed an interesting technical challenge to me, and I decided to expand my script to a project as a challenge to myself.

- Event hosts wanting to see attendance trends at a more granular level
- Organizers looking to move away from the Meetup platform and want to archive past events and media (videos/pictures)

CHALLENGE
The part of my script that extracts event metadata needed minimal modification to extract all event metadata it hadn't captured before. The new, BIG challenge was in: how to collect the URL for ALL event pages from a group so that my metadata extraction script can run on these pages. The method I used for my own data involved manual scrolling to the bottom; this was not feasible for groups with hundreds or thousands of events. This is where automation enters the picture.

SOLUTION

- Automating Scrolls on Past Events Page
  Creating a Selenium script that auto-scrolls to the bottom on the Past Events page, which will load more past events.This process repeats until auto-scroll returns null and the number of past events on the page matches the number displayed. Once all events are displayed, extract all URL links and save them to a PostgreSQL table called "events_url".

- Batching Metadata Extraction Script
  Next, my metadata extraction script needed to be modified to save its data in batches to PostgreSQL table called "events_metadata". Originally, my script stores the extracted data in memory (i.e. RAM) and only saved everything to file when the script finishes. With thousands of events, the risk of the script crashing and wiping out all data in memory became an important concern. Implementing batching mitigates crashing concerns, and allowed further hands-off time from the process.

- Batching De-duplication
  Finally, to prevent the metadata extraction script from starting at the beginning every time it starts, I added a new column called "have_checked" to the "events_url" SQL table. Every time the extraction script has extracted information from an event, it finds updates the "have_checked" value to True. In a future job, the extraction script will start with events that have the value of False in "have_checked", preventing redundant execution and possible duplication issues.

RESULT
A SQL table with all events, and each event's metadata for archival and analysis purposes.

IMPROVEMENTS
