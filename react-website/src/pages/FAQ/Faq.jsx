import React from 'react';
import '../../components/banner/banner.scss';
import Header from '../../components/header/Header';
import Banner from "./place";
import questions from "./questions.json"


const Home = () => {
    return (
        <>
            <Header />

            <div className="header">
              <div className="header-section">
                <h1>Frequently Asked Questions</h1>
                <h2>Here is showed questions that asked Frequently</h2>
              </div>
            </div>

            <Banner>
      
      {questions.map((question) => (
        <Banner.Entity key={question.id}>
          <Banner.Question>{question.question}</Banner.Question>
          <Banner.Text>{question.answer}</Banner.Text>
        </Banner.Entity>
      ))}
      <h4>
        Question not on the list? Contact out help desk for further enquiries
      </h4>
    </Banner>
        </>
    );
}

export default Home;