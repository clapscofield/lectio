# lectio

## Table of contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Features](#features)
- [Build Process](#build-process)
- [Acknowledgments](#acknowledgments)

## Introduction
[The Lectio app](http://app-lectio.herokuapp.com/), available online for access, was developed with the aim of facilitating the sharing of research in this project and making available the download of the literature database for a academic community.

The development of the platform took place in sprints, following a Scrum methodology aimed at effective development and visible results. Divided into two main sections - Dataset and PLN - the site was made with **Javascript language using the React framework**. The base of the design was made based on a free [template](https://www.creative-tim.com/product/notus-react), in order to focus on the short development time in delivering the Research and analysis of data results. 

**Available online**

<p align="center">
  <img src = "https://i.imgur.com/YP4mkPl.png">
</p>

## Technologies
- Python (scikit-learn, machine learning, data analysis)
- React / Javascript
- Heroku App
- Json, CSV (database)

## Features
### Dataset
The [dataset page](http://app-lectio.herokuapp.com/dataset/) is subdivided into Docs, Download, Table, and Graph.

**Docs** is a detailed description, presenting the dataset, the construction process, details of the data provided, and valuable information for users interested in the user base provided.

**Download** is the option to download the database created in CSV or Dump SQL format.

**Table** is the visualization of two main tables of the database: goodreads_works.csv and goodreads_reads_infos.csv. The preview guides those who want to understand the data format before downloading.

**Graph** indicates the studies of new data elaborated along with insights studies of data-based studies and guides research.

### NPL
The [NLP page](http://app-lectio.herokuapp.com/pln/) is geared towards natural language processing and is subdivided into Docs, Sentiment Analysis, Book Hits, and Coming Soon.

In **Docs**, there is a detailed description, with the presentation of the research carried out in PLN and building the sentiment analysis on the reviews.

**Sentiment Analysis** is the results found in the reviews processing with the VADER tool and the TextBlob tool for comparative purposes of the results and guidelines for future studies in the area.

**Success in Books** is a detailed description of the different visions of success in the literary field, collected from various written articles focused on natural language processing for success prediction. Concepts can guide future studies in the area of ​​projection.

**Coming Soon**, you will find the following research work points and the new functionalities for the platform in continuing this work with POCII.

## Build Process
The development took place in two main areas: the first focused on producing the database with the collection of information from the literature in Portuguese. The second was with natural language processing to generate insights and the application of data science for comparative data analysis. Finally, the Lectio platform was developed and put into production with the help of the free tool Heroku.

## Acknowledgments
Thanks to the Federal University of Minas Gerais and the supervisor Mirella Moro who made possible the development of this work.
