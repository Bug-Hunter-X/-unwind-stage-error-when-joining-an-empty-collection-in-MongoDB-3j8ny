```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocuments",
    },
  },
  {
    $unwind: {
      path: "$relatedDocuments",
      preserveNullAndEmptyArrays: true,
    }
  },
  {
    $match: {
      $expr: {
        $eq: [ {
          $ifNull: [ "$relatedDocuments.someField", null ]
        }, "someValue" ]
      }
    }
  }
];
```