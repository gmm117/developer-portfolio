import React from 'react';

export function Title( { title } ) {
    return (
        <div className="title_wrap">
            <h2 className="title">{title}</h2>
        </div>
    );
}

export function List( { seq, name, desc, sublist, image }) {
    const { date, type, role, skills, url, contents } = sublist;
    const { href, value } = url;
    const { image1, image2 } = image;
    const { src1, alt1 } = image1;
    const { src2, alt2} = image2; 

    return (
        <div className="pf_list clearfix">
            <div className="pf_info">
                <span className="pf_num">{seq}</span>
                <h3 className="pf_name">{name}</h3>
                <p className="pf_dsc">{desc}</p>
                <ul className="pf_sub_list">
                    <li>
                        <span>{date}</span>
                    </li>
                    <li>
                        <span>{type}</span>
                    </li>
                    <li>
                        <span>{role}</span>
                    </li>
                    <li>
                        <span>{skills}</span>
                    </li>
                    <li>
                        <span>URL : </span><a href={href} target="_blank">{value}</a> 
                    </li>
                    { contents && (
                        <>
                            <li>
                                <span>Contents</span>
                            </li>
                            <li className="pf_content_item">
                                <span>{contents.content1}</span>
                            </li>
                            <li className="pf_content_item">
                                <span>{contents.content2}</span>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            <div className="pf_pimg clearfix">
                <img className="pf_img" src={src1} alt={alt1}></img>
                <img className="pf_img" src={src2} alt={alt2}></img>
            </div>
        </div>
    );
}