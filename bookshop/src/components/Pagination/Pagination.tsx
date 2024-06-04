// components/Pagination/Pagination.tsx
import React from 'react';
import { ArrowLeft } from '../Icons/ArrowLeft';
import { ArrowRight } from '../Icons/ArrowRight';
import './Pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={`page-number ${currentPage === i ? 'active' : ''}`}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination-container">
            <div className="pagination">
                <button
                    className="prev-button"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <ArrowLeft />
                </button>
                <div className="page-numbers">
                    {renderPageNumbers()}
                </div>
                <button
                    className="next-button"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export { Pagination };
