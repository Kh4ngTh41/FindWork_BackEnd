#!/bin/bash

echo "Analyzing Git contributions (lines added/deleted) per author..."
echo "--------------------------------------------------------"

# Get a unique list of all authors from the Git history across ALL branches
# The --all flag is crucial here to ensure all reachable commits are considered.
git log --all --format='%aN' | sort -u | while read AUTHOR; do
    echo "Author: $AUTHOR"
    # Get numstat for all commits by this author (still consider all branches for their commits)
    # Adding --all here as well ensures if an author committed on a branch you haven't merged, it's still counted.
    git log --all --author="$AUTHOR" --pretty=tformat: --numstat | awk \
        '{
            added_lines += $1;    # Sum the first column (additions)
            deleted_lines += $2;  # Sum the second column (deletions)
        }
        END {
            # Print the total added, deleted, and net change for the author
            print "  Lines Added:   " added_lines;
            print "  Lines Deleted: " deleted_lines;
            print "  Net Lines:     " added_lines - deleted_lines;
            print "--------------------------------------------------------"
            # Reset counters for the next author (important inside the loop)
            added_lines = 0;
            deleted_lines = 0;
        }'
done

echo "Analysis complete."