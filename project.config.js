module.exports = {
  files: [
    {
      fileId: "1nImN7xMpsY9rzVBAqZF4KjadXat_bBhLdQiCZhecvHg",
      type: "doc",
      name: "homepage",
      dataDir: "src/data/",
    },
    {
      fileId: "1-4cLou5saCxYKVuMOmOfqqL4YW4LhQ3VQBpy3zN4oRk",
      type: "doc",
      name: "finalists",
      dataDir: "src/data/",
    },
    {
      fileId: "1w3_W7PYZwwyEWtav7EqcsXI9Mxd_rQP4Gey6LeLtqk4",
      type: "sheet",
      name: "timeline",
      dataDir: "src/data/",
    },
  ],
  /**
   * The dataMutators option makes it possible to modify what's returned by
   * the data fetchers. This is a good place to restructure the raw data, or
   * to do joins with other data you may have.
   */
  dataMutators: {
    // the function name should match one of the `name` values in `files`
    // data(originalData) {
    //   const sf = originalData.census.filter(
    //     (d) => d.state_fips == "06" && d.county_fips == "075"
    //   );
    //   const dict = sf.reduce((obj, item) => {
    //     obj[`${item.state_fips}${item.county_fips}${item.tract_code}`] =
    //       item.med_hh_inc;
    //     return obj;
    //   }, {});
    //   originalData.census = dict;
    //   return originalData;
    // },
  },
  //dataDir: 'inset',

  /**
   * `createAPI` makes it possible to bake out a series of JSON files that get
   * deployed with your project. This is a great way to break up data that users
   * only need a small slice of based on choices they make. The toolkit expects
   * this to return an array of objects. Each object should have a "key" and
   * a "value" - the "key" determines the URL, the "value" is what is saved at
   * that URL.
   */
  apis: [],
};
