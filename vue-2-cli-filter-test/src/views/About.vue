<template>
<b-container>
    <b-row>
      <b-col cols="12">
        <h1>IQEQ Dashboard Test</h1>

        <h2>TEST DESCRIPTION:</h2>
        <p>
          <b>Please recreate the screen in "sample.png" using Vue v.3.0.</b>
        </p>

        <h2>Test details</h2>
        <p>
          The following screen has 3 API endpoints. 

          <ol>
            <li>The first one is for creating the widgets (cards);</li>
            <li>The second one is for loading the content inside of the widgets;</li>
            <li>The third one is for loading the data inside the tables;</li>
          </ol>
        </p>

        <h2>Workflow</h2>

        <p>
          The first API endpoint is "/api/widgets" and the response will look like the exapmple in "widgets_endpoint.json". 
        </p>

        <p>
          The content that should be rendered in each widget is loaded through an API call to the "url" parameter and the response will be like the example in "widgets_content.json" (The example is for Onboardings widget). 
        </p>

        <p>
          The response will look like in "widgets_content.json" and it should help to render a  table (Datatable) which loads the data through an API call to the  url parameter + "/content". The response will be a standard response for a Datatable request.
        </p>

        <p>
          The data in the tables is not relevant, it can be anything. Attached "table_endpoint.json" as example for Onboardings (needs to be json parsed first).
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
