"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Button } from "./ui/button";

const Card = ({
  title,
  content,
  imageSrc,
  date,
  month,
}: {
  title: string;
  content: string;
  imageSrc: string;
  date: string;
  month: string;
}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image-container">
          <Image
            src={imageSrc}
            className="w-full h-full object-cover object-center"
            alt={title}
            width={300}
            height={300}
          />
          <div className="image-overlay" />
        </div>

        {/* Text Content */}
        <div className="content-box">
          <span className="card-title">{title}</span>
          <p className="card-content text-white text-sm!">{content}</p>
          <Button className="cursor-pointer">See More</Button>
        </div>

        {/* Clean Date Box (No background) */}
        <div className="date-box">
          <span className="month">{month}</span>
          <span className="date">{date}</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 400px; /* ✅ fixed height for all cards */
    border-radius: 20px;
    overflow: hidden;
    box-shadow: rgba(142, 142, 142, 0.2) 0px 15px 25px;
    // background-color: #f0f0f0;
    transition: transform 0.4s ease;
  }

  .card:hover {
    transform: translateY(-15px);
  }

  .image-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6); /* overlay for text readability */
    z-index: 1;
  }

  .content-box {
    position: relative;
    z-index: 10;
    padding: 60px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }

  .card-title {
    font-size: 22px;
    font-weight: 800;
    color: white;
  }

  .card-content {
    margin-top: 8px;
    font-size: 12px;
    font-weight: 500;
    color: white;
    flex-grow: 1;
  }

  .see-more {
    margin-top: 12px;
    font-size: 10px;
    font-weight: 900;
    color: rgb(7, 185, 255);
    text-transform: uppercase;
    background: white;
    padding: 6px 10px;
    border-radius: 4px;
    display: inline-block;
    align-self: flex-start;
    cursor: pointer;
  }

  .date-box {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 50px;
    height: 50px;
    background: white;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 2px solid rgb(7, 185, 255);
    background: transparent;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    font-family: sans-serif;
  }

  .date-box .month {
    font-size: 10px;
    color: white;
    font-weight: 700;
  }

  .date-box .date {
    font-size: 16px;
    font-weight: 800;
    color: white;
  }
`;

export default Card;
