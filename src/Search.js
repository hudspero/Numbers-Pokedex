import React, { Component } from 'react';

/* Component for handling Search functionality */
export class Search extends Component {
   state = {
      text: ''
   };

   /* When clicking the Search button */
   onSubmit = e => {
      e.preventDefault();
      if (this.state.text === '') {
         alert("Search field cannot be empty");
      } else {
         this.props.searchPokemon(this.state.text);
      }
   };

   /* Set the text entered in the search field as the value to search with */
   onChange = e => this.setState({ [e.target.name]: e.target.value });

   render() {
      return (
         <div>
            <form onSubmit={this.onSubmit} className='form'>
               <input
                  type='text'
                  name='text'
                  placeholder='Search Pokemon...'
                  value={this.state.text}
                  onChange={this.onChange}
               />
               <input
                  type='submit'
                  value='Search'
               />
            </form>
         </div>
      );
   }
}

export default Search;