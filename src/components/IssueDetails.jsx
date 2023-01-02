import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { IssueHeader } from "./IssueHeader";

function useIssueData(issueNumber) {
  return useQuery(["issues", issueNumber], () => {
    return fetch(`/api/issues/${issueNumber}`).then((res) => res.json());
  });
}

export default function IssueDetails() {
  const { number } = useParams();
  const issueQuery = useIssueData(number);

  return (
    <div className="issue-details">
      {issueQuery.isLoading ? (
        <p>Loading issue...</p>
      ) : (
        <>
          <IssueHeader {...issueQuery.data} />
        </>
      )}
    </div>
  );
}
