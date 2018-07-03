import React, { Component } from 'react'

import ArticleBody from './ArticleBody';
import Avatar from './Avatar';
import ArticleLinks from './ArticleLinks';
import ArticleTitle from './ArticleTitle';

class MainBody extends Component {
  render() {
    return (
      <div className="large-8 medium-12 columns article">
        <ArticleTitle />
        <Avatar />
        <ArticleBody />
        <ArticleLinks />
      </div>
    )
  }
}

export default MainBody