import React from "react";

import './PostCard.css';

export default function PostCard({ el }) {
    const placeholderIcon = '/destination.png';
    const real = el.source_info.thumbnail;
    return (
        <div className="post-single">
            <div className="post-src-wrapper">
                <div className="post-src-icon">
                    <div className="post-src-img">
                        <img src={real || placeholderIcon} alt="logo" />
                    </div>
                </div>
                <div className="post-src-info">
                    <div className="post-src-title">
                        <a className="post-ref" href={el.link}>{el.source_info.name}</a>
                    </div>
                    <div className="post-src-link">
                        {el.diplayed_link}
                    </div>
                </div>
            </div>
            <div className="post-body">
                <div className="post-title">
                    <a className="post-ref" href={el.link}>{el.title}</a>
                </div>
                <div className="post-snippet">
                    {el.snippet}
                </div>
            </div>
        </div>

    );
}

