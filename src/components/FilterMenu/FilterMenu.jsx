import React, { useEffect, useRef, useState } from "react";
import './FilterMenu.css'


function FilterMenu({ filters, activeFilter, setActiveFilter }) {
  const containerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState({
    left: false,
    right: false,
  });

  const checkOverflow = () => {
    const container = containerRef.current;
    if (container) {
      setIsOverflowing({
        left: container.scrollLeft > 0,
        right:
          container.scrollLeft + container.clientWidth < container.scrollWidth,
      });
    }
  };

  const scrollContent = (direction) => {
    const container = containerRef.current;
    container.scrollBy({
      left: direction === "left" ? -100 : 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkOverflow();
    const container = containerRef.current;
    container.addEventListener("scroll", checkOverflow);
    return () => container.removeEventListener("scroll", checkOverflow);
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="FilterMenu flex text-sm border-b border-neutral overflow-x-auto  scrollbar-hide w-full gap-5 items-center my-6"
      >
        {filters.map((filter) => (
          <div
            className={`flex-shrink-0 py-4 text-secondary cursor-pointer 
            ${
              filter === activeFilter
                ? "border-b border-secondary text-primary"
                : "hover:text-primary"
            }`}
            key={filter.uid}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.name}
          </div>
        ))}
      </div>
      {isOverflowing.left && (
        <div
          className="FilterMenu__arrow absolute z-10 text-xl cursor-pointer"
          onClick={() => scrollContent("left")}
        >
          &lt;
        </div>
      )}
      {isOverflowing.right && (
        <div
          className="FilterMenu__arrow absolute right-0 z-20 text-xl cursor-pointer"
          onClick={() => scrollContent("right")}
        >
          &gt;
        </div>
      )}
    </div>
  );
}

export default FilterMenu;
