import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import writings_data from "../../assets/writings_data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import './Writings.css'; // Assuming you have some styles for the writing detail

const WritingDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const writing = writings_data.find(w => w.slug === slug);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setLoading(true);
    setError(null);
    if (writing && writing.contentFile) {
      fetch(`/assets/writings/${writing.contentFile}`)
        .then(res => {
          if (!res.ok) throw new Error('File not found');
          return res.text();
        })
        .then(text => {
          setContent(text);
          setLoading(false);
        })
        .catch(err => {
          setError('Could not load this writing.');
          setLoading(false);
        });
    } else {
      setError('Writing not found.');
      setLoading(false);
    }
  }, [writing]);

  if (!writing) return <div style={{padding: '3rem'}}>Not found</div>;

  return (
    <div className="writing-detail">
      <button className="writing-back-btn" onClick={() => navigate(-1)}>&larr; Back</button>
      <h1 className="writing-detail-title">{writing.title}</h1>
      <h2 className="writing-detail-subtitle">{writing.subtitle}</h2>
      <div className="writing-detail-meta">
        <span>{writing.tags}</span> &nbsp;|&nbsp; <span>{writing.reading_time}</span>
      </div>
      <div>
        {loading && <div>Loading...</div>}
        {error && <div style={{color: 'red'}}>{error}</div>}
        {!loading && !error && (
          <div className="writing-markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
          </div>
        )}
      </div>
      <div className="writing-back-btn-bottom-wrapper">
        <button className="writing-back-btn" onClick={() => navigate(-1)}>&larr; Back</button>
      </div>
    </div>
  );
};

export default WritingDetail;
