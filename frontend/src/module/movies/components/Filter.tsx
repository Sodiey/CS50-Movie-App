import { ChangeEvent } from "react";
import styled from "styled-components";
import { FullWidthInner } from "layout/PageLayout";
import Select from "forms/Select";
import { Filters, FilterMethod } from "../types";

const FilterWrapper = styled.div`
  width: 100%;
  height: 69px;
  background-color: ${({ theme }) => theme.colors.gray["10"]};
  top: 60px;
  position: sticky;
  z-index: 20;
  border: 1px solid rgb(238, 237, 239);
  margin-top: 2px;
  box-shadow: rgb(51 51 51 / 15%) 0px 2px 4px;
`;

const Tab = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.accent.dark};
  :last-child {
    border-right: 1px solid ${({ theme }) => theme.colors.accent.dark};
  }
  height: 100%;
  width: 100%;
  padding: 15px 25px;
`;

const StyledH4 = styled.h4`
  color: ${({ theme }) => theme.colors.accent.dark};
  font-size: 12px;
  letter-spacing: 1px;
`;

const Inner = styled.div`
  display: flex;
`;

type TabItemProps = {
  title: string;
  options: string[];
  handleChangeFilter: (
    e: ChangeEvent<HTMLSelectElement>,
    method: FilterMethod
  ) => void;
  value: number;
  method: FilterMethod;
};
const TabItem = ({
  title,
  options,
  handleChangeFilter,
  value,
  method,
}: TabItemProps) => {
  return (
    <Tab>
      <StyledH4>{title}</StyledH4>
      <Select value={value} onChange={(e) => handleChangeFilter(e, method)}>
        {options?.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Tab>
  );
};

type FilterProps = {
  filterOptions: any;
  filters: Filters;
  handleChangeFilter: (
    event: ChangeEvent<HTMLSelectElement>,
    method: FilterMethod
  ) => void;
};

const Filter = ({
  filterOptions,
  handleChangeFilter,
  filters,
}: FilterProps) => {
  return (
    <FilterWrapper>
      <FullWidthInner>
        <Inner>
          <TabItem
            handleChangeFilter={handleChangeFilter}
            title="Year"
            options={filterOptions.years}
            value={filters.year}
            method={FilterMethod.year}
          />
        </Inner>
      </FullWidthInner>
    </FilterWrapper>
  );
};

export default Filter;
