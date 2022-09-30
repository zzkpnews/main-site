# API Document of First Draft

### Get the news-list for home page

#### Response

JSON structure:

```typescript
{
    bgimg:string,
    columnId:string,
    columnTitle:string,
    citation:string,
    itemId:string,
    keywords:string,
    leadTitle:string,
    subtitle:string,
    timestamp:string,
    title:string,
    type:string,
}[]
```

### Get the news-list for column page

JSON structure:

```typescript
{
    list:{
        bgimg:string,
        citation:string,
        itemId:string,
        keywords:string,
        leadTitle:string,
        subtitle:string,
        timestamp:string,
        title:string,
    }[],
}
```