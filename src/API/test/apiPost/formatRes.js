function formatRes(el){

    return{
        position: el.position,
        title:el.title,
        link:el.link,
        diplayed_link:el.displayed_link,
        snippet:el.snippet,
        source_info:{
            name: el.source,
            description: el.about_this_result.source.description,
            link: el.about_this_result.source.source_info_link,
            thumbnail: el.about_this_result.source.icon
        }
    }
}

export {formatRes};