import React from 'react'

export const Card = ({ data }) => {
    return (
        <div class="card">
            <div class="wrapper">
                <img alt={data.source.name}
                    src={data.urlToImage}
                />
                <div class="cont">
                    <div class="content">
                        <div class="text">
                            <h3>
                                {data.title}
                            </h3>
                            <p>
                                {data.description}
                            </p>
                        </div>
                    </div>
                    <div class="tombol">
                        <span class="read">Read</span>
                        <span class="save">Save</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
