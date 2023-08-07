/**
 * Maps the data from the property "Episodes" to a new property "EpisodesAsNumber"
 * example: "62 eps" => 62
 */
return (dataTransformer = (resource, items) => {
  return items.map((item) => {
    if (item.Episodes && typeof item.Episodes === "string") {
      const episodes = item.Episodes.split(" ");
      if (episodes.length > 1) {
        item.EpisodesAsNumber = parseInt(episodes[0]);
      }
    }
    return item;
  });
});
